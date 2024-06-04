import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { getSlot, hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';

export interface SixHeaderAppSwitcherSelectPayload {
  selectedLabel: string;
  name: string;
  item: HTMLSixMenuItemElement;
}

export interface SixHeaderProfileSelectPayload {
  selectedLabel: string;
  name: string;
  item: HTMLSixMenuItemElement;
}

export interface SixHeaderSearchFieldToggle {
  visible: boolean;
}

enum Section {
  None,
  Search,
  AppSwitcher,
  Profile,
}

enum Slot {
  Search = 'search-field',
  Notifications = 'notifications',
  AppSwitcher = 'app-switcher-menu',
  Profile = 'profile-menu',
  Logo = 'logo',
}

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define a custom component that is included in the header.
 * @slot search-field - Used to define the search field component in the header.
 * @slot notifications - Used to define the notification component in the header.
 * @slot app-switcher-menu - Used to define the application switcher menu in the header.
 * @slot profile-menu - Used to define the profile menu in the header.
 * @slot profile-avatar - Used to define the avator in the header.
 */

@Component({
  tag: 'six-header',
  styleUrl: 'six-header.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class SixHeader {
  /** Indicates if content should be shifted down when search field is visible. */
  @Prop() shiftContent = false;

  /** Set whether the hamburger menu should be visible or not */
  @Prop() hideHamburgerMenu = false;

  /** Set the hamburger menu icon to open or closed state */
  @Prop() openHamburgerMenu = false;

  /** Set the header search to be in an open or closed state */
  @Prop() openSearch = false;

  /** Set whether the logo should be clickable */
  @Prop() clickableLogo = false;

  /** The displayed logo. Either six or bme. Defaults to six. */
  @Prop() logo: 'six' | 'bme' = 'six';

  @Watch('openSearch')
  handleOpenSearchChange() {
    this.computeSearchOpenState();
  }

  /** Sets open state for search */
  @Method()
  async setSearchOpenState(openState: boolean) {
    if (this.selectedSection === Section.Search && !openState) {
      this.selectedSection = Section.None;
    } else if (openState && this.selectedSection !== Section.Search) {
      this.selectedSection = Section.Search;
    }
  }

  /** Get open state for search */
  @Method()
  async getIsSearchOpen() {
    return this.selectedSection === Section.Search;
  }

  /** Emitted when the name of the selected app is clicked. */
  @Event({ eventName: 'six-header-app-name-clicked' }) sixAppNameClicked!: EventEmitter<EmptyPayload>;

  /** Emitted when a menu item is in the app switcher menu is selected. */
  @Event({ eventName: 'six-header-app-switcher-select' })
  sixAppSwitcherSelect!: EventEmitter<SixHeaderAppSwitcherSelectPayload>;

  /** Emitted when a menu item is in the profile menu is selected. */
  @Event({ eventName: 'six-header-profile-select' }) sixProfileSelect!: EventEmitter<SixHeaderProfileSelectPayload>;

  /** Emitted when the hamburger menu is clicked. */
  @Event({ eventName: 'six-header-hamburger-menu-clicked' }) sixHamburgerClick!: EventEmitter<EmptyPayload>;

  /** Emitted when the header logo is clicked. */
  @Event({ eventName: 'six-header-logo-clicked' }) logoClick!: EventEmitter<EmptyPayload>;

  /** Emitted when search field is toggled. */
  @Event({ eventName: 'six-header-search-field-toggle' })
  sixSearchFieldToggle!: EventEmitter<SixHeaderSearchFieldToggle>;

  @Element() host!: HTMLSixHeaderElement;

  private eventListeners = new EventListeners();

  private slots?: Record<Slot, boolean>;

  private mutationObserver?: MutationObserver;

  @State() selectedApp?: string;
  @State() selectedSection?: Section;

  private hasSlot(slot: Slot): boolean {
    if (this.slots == null) {
      return false;
    }
    return this.slots[slot];
  }

  private isSectionSelected(value: Section) {
    return value === this.selectedSection;
  }

  private selectSection(section: Section) {
    return () => (this.selectedSection = section);
  }

  private toggleSearch() {
    const visible = this.selectedSection !== Section.Search;
    this.selectedSection = this.selectedSection === Section.Search ? Section.None : Section.Search;
    this.sixSearchFieldToggle.emit({ visible });
    if (this.selectedSection === Section.Search) {
      // setFocus deferred due to https://github.com/ionic-team/stencil/issues/3772
      setTimeout(async () => {
        const slot = getSlot(this.host, Slot.Search);
        slot?.shadowRoot?.querySelector('six-input')?.setFocus();
      }, 50);
    }
  }

  private setupMenu = (el?: HTMLSixIconButtonElement) => {
    if (el == null) return;

    this.eventListeners.add(el, 'click', () => this.sixHamburgerClick.emit());
  };

  private setupLogo = (el?: HTMLElement) => {
    if (!this.clickableLogo || el == null) return;

    this.eventListeners.add(el, 'click', () => this.logoClick.emit());
  };

  private setupProfile = (el?: HTMLSixDropdownElement) => {
    if (el == null) return;

    this.eventListeners.add(el, 'six-dropdown-show', this.selectSection(Section.Profile));
    this.eventListeners.add(el, 'six-dropdown-hide', this.selectSection(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: Event) => {
      const { name, item } = (event as CustomEvent).detail;
      this.sixProfileSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  private setupAppSwitcher = (el?: HTMLSixDropdownElement) => {
    if (el == null) return;

    this.eventListeners.add(el, 'six-dropdown-show', this.selectSection(Section.AppSwitcher));
    this.eventListeners.add(el, 'six-dropdown-hide', this.selectSection(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: Event) => {
      const { name, item } = (event as CustomEvent).detail;
      this.selectedApp = item.innerText;
      this.sixAppSwitcherSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  private appNameClicked = () => this.sixAppNameClicked.emit();

  private computeSearchOpenState = () => {
    this.selectedSection = this.openSearch ? Section.Search : Section.None;
  };

  componentWillLoad() {
    this.slots = {
      [Slot.Search]: hasSlot(this.host, Slot.Search),
      [Slot.Notifications]: hasSlot(this.host, Slot.Notifications),
      [Slot.AppSwitcher]: hasSlot(this.host, Slot.AppSwitcher),
      [Slot.Profile]: hasSlot(this.host, Slot.Profile),
      [Slot.Logo]: hasSlot(this.host, Slot.Logo),
    };

    if (this.hasSlot(Slot.AppSwitcher)) {
      this.updateSelectedApp();
    }

    if (this.hasSlot(Slot.Search)) {
      this.computeSearchOpenState();
    }
  }

  connectedCallback() {
    const appSwitcherSlot = getSlot(this.host, Slot.AppSwitcher);
    if (appSwitcherSlot) {
      this.mutationObserver = new MutationObserver((mutations) => {
        if (mutations.some((mutation) => mutation.type === 'childList' || mutation.type === 'attributes')) {
          this.updateSelectedApp();
        }
      });
      this.mutationObserver.observe(appSwitcherSlot, { attributes: true, childList: true, subtree: true });
    }
  }

  private updateSelectedApp() {
    // there are more concise ways to select the first checked menu item, but this is one that works for jest
    const element = getSlot(this.host, Slot.AppSwitcher);
    if (element == null) {
      return undefined;
    }
    const items = Array.from(element.querySelectorAll('six-menu-item'));
    const firstCheckedMenuItem = items.find(
      (item) => item.hasAttribute('checked') && item.getAttribute('checked') !== 'false'
    );
    this.selectedApp = firstCheckedMenuItem?.textContent ?? undefined;
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
    this.mutationObserver?.disconnect();
  }

  render() {
    const hamburgerMenu = !this.hideHamburgerMenu && (
      <section class="six-header__menu">
        <six-icon-button name={this.openHamburgerMenu ? 'menu_open' : 'menu'} ref={this.setupMenu} />
      </section>
    );

    const search = this.hasSlot(Slot.Search) && (
      <section
        class={{
          'six-header__search': true,
          'six-header__search--open': this.isSectionSelected(Section.Search),
        }}
      >
        <six-icon-button name="search" onClick={() => this.toggleSearch()} data-testid="search-trigger" />
      </section>
    );

    const notifications = this.hasSlot(Slot.Notifications) && (
      <section class="six-header__notification">
        <slot name={Slot.Notifications} />
      </section>
    );

    const appSwitcher = this.hasSlot(Slot.AppSwitcher) && (
      <section
        class={{
          'six-header__app-switcher': true,
          'six-header__app-switcher--open': this.isSectionSelected(Section.AppSwitcher),
        }}
      >
        <six-dropdown distance={13} skidding={20} placement="bottom-end" ref={this.setupAppSwitcher}>
          <div slot="trigger" class="six-header__app-switcher-dropdown">
            <a onClick={this.appNameClicked} class="six-header__selected-app">
              {this.selectedApp}
            </a>
            <six-icon-button name="apps" />
          </div>
          <slot name={Slot.AppSwitcher} />
        </six-dropdown>
      </section>
    );

    const profile = this.hasSlot(Slot.Profile) && (
      <section
        class={{
          'six-header__profile': true,
          'six-header__profile--open': this.isSectionSelected(Section.Profile),
        }}
      >
        <six-dropdown distance={17} skidding={20} placement="bottom-end" ref={this.setupProfile}>
          <slot name="profile-avatar" slot="trigger" />
          <slot name="profile-menu" />
        </six-dropdown>
      </section>
    );

    const logo = this.hasSlot(Slot.Logo) ? (
      <section>
        <slot name="logo" />
      </section>
    ) : (
      <section
        class={{
          'six-header__logo': true,
          'six-header__logo--clickable': this.clickableLogo,
        }}
        ref={this.setupLogo}
      >
        {this.logo === 'bme' ? bmeLogo() : sixLogo()}
      </section>
    );

    return (
      <Host>
        <header part="header" class="six-header">
          {hamburgerMenu}

          {logo}

          <section class="six-header__placeholder" />

          <section class="six-header__custom">
            <slot />
          </section>

          {search}

          {notifications}

          {appSwitcher}

          {profile}
        </header>

        <div
          class={{
            'six-header__search-field': true,
            'six-header__search-field--visible': this.isSectionSelected(Section.Search),
            'six-header__search-field--shift-content': this.shiftContent,
          }}
        >
          <slot name={Slot.Search} />
        </div>
      </Host>
    );
  }
}

function sixLogo() {
  return (
    <svg class="six-header__logo--six" viewBox="0 0 90 26" xmlns="http://www.w3.org/2000/svg">
      <title>SIX</title>
      <g fill="#DE3919" fill-rule="nonzero">
        <path d="m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525" />
        <path d="m42.16.324h5.21v24.806h-5.21z" />
        <path d="m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545" />
      </g>
    </svg>
  );
}

function bmeLogo() {
  return (
    <svg class="six-header__logo--bme" viewBox="0 0 249.38 122.47">
      <title>BME Exchange</title>
      <defs>
        <style>
          .cls-1 {'{'}
          fill: #002c5f;
          {'}'}
          .cls-1, .cls-2 {'{'}
          stroke-width: 0px;
          {'}'}
          .cls-2 {'{'}
          fill: #959595;
          {'}'}
        </style>
      </defs>
      <polygon
        class="cls-2"
        points="183.07 88.18 205.3 52.02 178.8 52.02 178.8 36.16 205.3 36.16 183.07 0 202.45 0 228.71 44.09 201.32 88.18 183.07 88.18"
      />
      <g>
        <path
          class="cls-1"
          d="M124.21,104.18c2.64,0,3.97,1.46,3.97,4.38v8.37h-1.96l-.44-1.71h-.07c-.41.66-.88,1.15-1.4,1.47-.52.31-1.17.47-1.97.47-1.05,0-1.83-.37-2.36-1.11-.53-.74-.8-1.65-.8-2.75,0-1.29.39-2.27,1.18-2.94s1.93-1.03,3.44-1.1l1.71-.07v-.6c0-.8-.14-1.38-.42-1.75-.28-.37-.7-.55-1.27-.55-.43,0-.88.08-1.35.23-.47.15-.96.36-1.46.62l-.81-1.94c1.17-.69,2.51-1.04,4.01-1.04ZM125.5,110.99l-1.11.05c-.89.05-1.53.26-1.91.63-.38.38-.58.9-.58,1.58,0,1.22.48,1.82,1.45,1.82.61,0,1.13-.26,1.53-.77.41-.51.61-1.23.61-2.16v-1.15Z"
        />
        <path
          class="cls-1"
          d="M143.33,112.3c0,.97-.2,1.82-.61,2.55-.41.73-.99,1.3-1.74,1.71-.75.41-1.65.61-2.7.61-.74,0-1.44-.07-2.1-.21-.66-.14-1.28-.35-1.87-.64v-2.77c.61.35,1.27.63,1.96.83.69.2,1.35.3,1.98.3.75,0,1.32-.2,1.71-.61.38-.41.58-.92.58-1.53,0-.65-.2-1.17-.6-1.58-.4-.41-1.09-.86-2.08-1.37-.65-.35-1.23-.73-1.74-1.13-.52-.4-.92-.89-1.22-1.48s-.45-1.32-.45-2.21c-.02-1.37.42-2.47,1.29-3.3.88-.83,2.04-1.24,3.51-1.22.72,0,1.41.09,2.08.27.66.18,1.29.42,1.89.73l-.83,2.4c-1.11-.6-2.15-.9-3.11-.9-.66,0-1.17.18-1.52.53-.35.35-.53.81-.53,1.38,0,.45.08.82.24,1.13.16.31.44.6.83.88.39.28.93.58,1.6.92,1.14.58,2,1.23,2.57,1.95s.86,1.64.86,2.78Z"
        />
        <path
          class="cls-1"
          d="M150.52,116.94h-6.09v-1.55l1.66-.6v-12.18l-1.66-.6v-1.55h6.09v1.55l-1.66.6v12.18l1.66.6v1.55Z"
        />
        <path
          class="cls-1"
          d="M162.33,116.94h-3.02l-2.72-6.16-2.81,6.16h-2.91l4.15-8.49-3.81-7.98h2.93l2.47,5.72,2.47-5.72h2.93l-3.81,8.05,4.13,8.42Z"
        />
        <path
          class="cls-1"
          d="M172.04,117.17c-1.58,0-2.79-.52-3.62-1.57-.83-1.05-1.25-2.67-1.25-4.87,0-2.04.42-3.65,1.27-4.81s2.08-1.74,3.71-1.74c.63,0,1.2.07,1.71.2.51.13.96.32,1.36.57l-.76,2.12c-.37-.18-.74-.33-1.11-.44-.37-.11-.72-.16-1.06-.16-1.6,0-2.4,1.42-2.4,4.27s.8,4.15,2.4,4.15c.49,0,.96-.07,1.4-.22.44-.15.87-.35,1.3-.61v2.28c-.83.55-1.81.83-2.95.83Z"
        />
        <path
          class="cls-1"
          d="M186.25,110.64c0,1.28-.18,2.4-.54,3.38-.36.98-.91,1.75-1.65,2.31-.74.56-1.68.84-2.81.84-1.06,0-1.96-.28-2.7-.83s-1.3-1.32-1.68-2.31c-.38-.98-.58-2.11-.58-3.39,0-1.98.42-3.56,1.25-4.72.83-1.16,2.08-1.74,3.76-1.74,1.51,0,2.71.55,3.61,1.66s1.35,2.71,1.35,4.8ZM179.03,110.66c0,1.4.18,2.46.53,3.18.35.72.92,1.08,1.71,1.08s1.38-.36,1.73-1.08c.35-.72.53-1.79.53-3.21s-.18-2.45-.53-3.15c-.35-.7-.93-1.05-1.73-1.05s-1.35.35-1.71,1.05c-.35.7-.53,1.76-.53,3.17Z"
        />
        <path
          class="cls-1"
          d="M200.16,104.18c1.15,0,2.02.37,2.59,1.1.58.73.87,1.86.87,3.4v8.26h-2.68v-7.61c0-1.89-.53-2.84-1.59-2.84-.75,0-1.29.33-1.6.99-.32.66-.47,1.63-.47,2.91v6.55h-2.68v-7.63c0-.97-.13-1.68-.39-2.13-.26-.45-.66-.68-1.2-.68-.81,0-1.36.37-1.65,1.12s-.43,1.8-.43,3.17v6.16h-2.68v-12.52h2.1l.32,1.64h.16c.28-.62.68-1.08,1.22-1.4.54-.32,1.15-.47,1.84-.47.78,0,1.42.17,1.91.52.49.34.85.8,1.06,1.37h.18c.64-1.26,1.68-1.89,3.09-1.89Z"
        />
        <path
          class="cls-1"
          d="M211.78,104.18c1.28,0,2.27.55,2.99,1.66s1.07,2.72,1.07,4.84-.36,3.66-1.07,4.79c-.71,1.13-1.69,1.7-2.92,1.7-.69,0-1.29-.16-1.8-.48s-.92-.77-1.24-1.34h-.12c.03.38.06.74.08,1.06.02.32.03.61.03.88v5.19h-2.68v-18.06h2.17l.37,1.66h.14c.69-1.26,1.68-1.89,2.98-1.89ZM211.02,106.42c-.78,0-1.35.32-1.7.95-.35.63-.52,1.61-.52,2.95v.51c0,1.37.17,2.39.51,3.06.34.67.91,1,1.73,1,1.38,0,2.08-1.4,2.08-4.2,0-1.4-.17-2.46-.51-3.18-.34-.72-.87-1.08-1.59-1.08Z"
        />
        <path
          class="cls-1"
          d="M222.16,104.18c2.64,0,3.97,1.46,3.97,4.38v8.37h-1.96l-.44-1.71h-.07c-.41.66-.88,1.15-1.4,1.47-.52.31-1.17.47-1.97.47-1.05,0-1.83-.37-2.37-1.11-.53-.74-.8-1.65-.8-2.75,0-1.29.39-2.27,1.18-2.94.78-.67,1.93-1.03,3.44-1.1l1.71-.07v-.6c0-.8-.14-1.38-.41-1.75-.28-.37-.7-.55-1.27-.55-.43,0-.88.08-1.35.23-.47.15-.96.36-1.47.62l-.81-1.94c1.17-.69,2.51-1.04,4.01-1.04ZM223.45,110.99l-1.11.05c-.89.05-1.53.26-1.91.63-.38.38-.58.9-.58,1.58,0,1.22.48,1.82,1.45,1.82.61,0,1.13-.26,1.53-.77.41-.51.61-1.23.61-2.16v-1.15Z"
        />
        <path
          class="cls-1"
          d="M234.32,104.18c1.14,0,2.02.37,2.65,1.1s.95,1.85.95,3.36v8.3h-2.68v-7.66c0-.92-.13-1.62-.38-2.09s-.68-.7-1.28-.7c-.85,0-1.43.34-1.76,1.01-.33.68-.5,1.76-.5,3.25v6.18h-2.68v-12.52h2.1l.32,1.64h.16c.31-.62.73-1.08,1.27-1.4s1.15-.47,1.82-.47Z"
        />
        <path
          class="cls-1"
          d="M238.98,104.41h2.84l1.84,6.64c.11.43.21.86.3,1.3s.16.87.21,1.28h.09c.05-.37.12-.77.22-1.2.1-.43.21-.89.33-1.38l1.78-6.64h2.79l-4.2,14.05c-.43,1.38-.97,2.4-1.63,3.04-.65.65-1.5.97-2.55.97-.28,0-.53-.02-.77-.05-.24-.03-.46-.08-.68-.14v-2.28c.17.05.34.08.52.11s.35.05.52.05c.54,0,.95-.18,1.23-.53.28-.35.56-.94.82-1.75l.28-1.04-3.94-12.43Z"
        />
      </g>
      <polygon class="cls-1" points="249.37 88.18 231.12 88.18 218.67 67.95 227.9 53.08 249.37 88.18" />
      <polygon class="cls-1" points="218.53 18.92 229.99 0 249.37 0 227.9 34.66 218.53 18.92" />
      <polygon
        class="cls-1"
        points="112.98 72.41 155.28 72.41 155.28 62.51 123.42 62.51 123.42 49.18 146.37 49.18 146.37 39.27 123.42 39.27 123.42 25.79 155.28 25.79 155.28 15.89 112.98 15.89 112.98 39.27 123.42 39.27 123.42 49.18 112.98 49.18 112.98 72.41"
      />
      <path
        class="cls-1"
        d="M10.44,48.38h20.6c4.68,0,8.1,3.06,8.1,7.11s-3.42,7.02-8.1,7.02H10.44v-14.13ZM10.44,25.79h18.54c4.59,0,7.02,2.96,7.02,6.29s-2.43,6.39-7.02,6.39H10.44v-12.68ZM0,72.41h32.21c9.9,0,17.37-6.3,17.37-16.38,0-7.2-4.23-11.89-10.08-13.77,4.23-1.89,6.93-6.03,6.93-11.25,0-10.08-7.65-15.12-16.29-15.12H0v22.59h10.44v9.9H0v24.03Z"
      />
      <polygon
        class="cls-1"
        points="56.47 72.37 66.91 72.37 66.91 37.45 81.58 52.31 96.25 37.45 96.25 72.37 106.69 72.37 106.69 14.68 81.58 39.72 56.47 14.68 56.47 72.37"
      />
      <path
        class="cls-1"
        d="M1.69,82.58c.19,0,.46,0,.62,0,.51,0,.96.18.96.79,0,.49-.37.7-.48.76-.23.1-.73.1-1.1.1v-1.64ZM1.69,85.33c.71-.01,1.12-.01,1.39.15.27.17.37.46.37.76,0,.42-.23.68-.57.8-.28.09-.79.09-1.19.08v-1.81ZM1.76,88.18c.87.02,1.95.04,2.65-.44.62-.44.78-1.06.78-1.59,0-.6-.25-1.15-.78-1.42-.18-.08-.38-.12-.58-.17.32-.13.69-.29.93-.79.11-.22.15-.44.15-.65,0-.3-.08-.71-.38-1.05-.39-.42-1-.53-1.92-.53-.32,0-.89,0-1.21.02l-1.3.02-.06.05c.04.9.05,1.24.05,2.53s0,2.65-.03,3.99l.07.03h1.63Z"
      />
      <path
        class="cls-1"
        d="M10.17,83.04c.19.21.27.49.33.75.08.36.09.7.1.93.04,1.4-.26,2.42-1.35,2.42-1.29,0-1.38-1.52-1.38-2.36,0-1.12.27-1.7.71-1.98.25-.15.5-.19.68-.19.35,0,.69.16.91.43M11.65,82.44c-.16-.2-.34-.38-.56-.52-.48-.33-1.13-.47-1.79-.47-.58,0-1.17.1-1.67.39-1.14.65-1.35,1.73-1.42,2.13-.06.32-.09.64-.09.96,0,.64.07,1.83.96,2.65.71.66,1.68.76,2.16.76.72,0,1.45-.18,2-.63.93-.77,1.12-2.04,1.12-2.83,0-1.47-.47-2.14-.7-2.43"
      />
      <path
        class="cls-1"
        d="M17.76,86.9c-1.02.06-1.83.07-2.12.07h-.18c-.02-2.5,0-3.13.07-5.37l-.06-.05c-.8.03-1.01.03-1.66.03l-.05.05c.04.75.04.98.04,2.09,0,1.47,0,2.95,0,4.43l.04.05c1.84-.03,2.17-.03,3.86-.03l.05-.05.07-1.18-.04-.04Z"
      />
      <path
        class="cls-1"
        d="M21.15,84.16c-.79-.33-1.19-.5-1.19-.92,0-.28.27-.66.88-.66.71,0,1.13.29,1.48.53l.08-.03.07-1.23-.04-.07c-.4-.17-.83-.35-1.74-.35-1.75,0-2.37.99-2.37,1.99,0,1.14.88,1.55,1.41,1.79l.31.14c.65.28,1.14.51,1.14,1,0,.35-.31.77-1.12.77-.85,0-1.33-.37-1.6-.59l-.09.03-.07,1.32.06.07c.1.04.21.08.31.11.22.08.77.24,1.47.24.28,0,.99-.04,1.56-.3.78-.38,1.12-1.09,1.12-1.89,0-.53-.21-1.11-.7-1.49-.25-.18-.5-.3-.72-.4l-.24-.09Z"
      />
      <path
        class="cls-1"
        d="M25.56,85.29l.47-1.58.32-1.1.29,1.22.35,1.46h-1.43ZM27.54,81.55c-.9.02-1.09.02-2.09.02l-.07.06c-.49,1.59-.79,2.54-2.17,6.48l.04.07h1.46l.06-.06.46-1.7h2.02l.4,1.73.06.06c.68-.03.87-.03,1.63-.03l.04-.07c-1.13-4.01-1.26-4.44-1.8-6.51l-.06-.05Z"
      />
      <path
        class="cls-1"
        d="M32.94,84.16c-.79-.33-1.2-.5-1.2-.92,0-.28.26-.66.89-.66.71,0,1.13.29,1.47.53l.08-.03.07-1.23-.04-.07c-.41-.17-.83-.35-1.74-.35-1.75,0-2.37.99-2.37,1.99,0,1.14.88,1.55,1.41,1.79l.31.14c.64.28,1.14.51,1.14,1,0,.35-.31.77-1.12.77-.85,0-1.33-.37-1.6-.59l-.09.03-.07,1.32.06.07c.1.04.2.08.31.11.21.08.76.24,1.47.24.27,0,.99-.04,1.55-.3.78-.38,1.12-1.09,1.12-1.89,0-.53-.21-1.11-.7-1.49-.26-.18-.49-.3-.72-.4l-.24-.09Z"
      />
      <path
        class="cls-1"
        d="M41.67,88.12c-.05-1.22-.06-1.55-.06-2.75l2.06-3.77-.03-.06c-.7.02-.89.02-1.47.02l-.05.06c-.54,1.17-.8,1.67-1.19,2.43-.1-.21-.58-1.11-.67-1.29-.17-.34-.3-.62-.57-1.22l-.07-.04c-.8.04-1,.06-1.78.06l-.03.08c.28.48,1.52,2.6,1.76,3.03.13.25.26.48.4.73v.29c0,.93-.01,1.34-.07,2.44l.05.06c.78-.03.99-.03,1.65-.03l.06-.06Z"
      />
      <path
        class="cls-1"
        d="M54.31,81.55c-.98.02-1.14.02-2.17.02l-.06.06-.43,1.52-.37,1.35-.44,1.63-.41-1.68-.26-1.06-.47-1.8-.04-.05c-1,.02-1.17.02-2.22.02l-.06.06c-.1,2.8-.13,3.52-.34,6.52l.04.06c.6-.03.78-.03,1.32-.03l.05-.06.03-1.79.06-1.81.04-1.77.41,1.66.36,1.33.63,2.42.06.06c.58-.03.74-.03,1.4-.03l.05-.06.54-1.99.38-1.37.52-1.96v1.68l.03,1.42v2.25l.04.06c.65-.03.9-.03,1.62-.03l.05-.06c-.06-1.07-.13-2.14-.16-3.22-.03-.59-.05-1.18-.08-1.77-.04-.87-.05-.98-.05-1.54l-.05-.05Z"
      />
      <path
        class="cls-1"
        d="M60.62,86.92c-1.11.06-1.37.07-2.57.07v-1.64s2.17,0,2.17,0l.07-.05.06-1.06-.05-.06-2.26.04v-1.49c1.06,0,1.27,0,2.4.03l.04-.06.07-1.09-.04-.04h-4.11l-.06.06c.06.91.08,1.25.08,3.76,0,1.18-.02,1.77-.05,2.74l.05.04h4.12l.08-.06.06-1.14-.05-.07Z"
      />
      <path
        class="cls-1"
        d="M63.49,82.69c.13,0,.27,0,.39,0,.37,0,1.09,0,1.09.82,0,.26-.07.61-.41.82-.26.16-.59.18-1.07.19v-1.83ZM63.93,85.61c.63,1.07.77,1.35,1.37,2.57l.08.05c.29-.01.57-.03.86-.05.29,0,.59-.01.88-.01l.06-.11c-.36-.46-.46-.6-1.13-1.68-.3-.48-.45-.73-.69-1.14.43-.19,1.28-.58,1.28-1.77,0-.41-.11-1.26-.88-1.67-.49-.25-.99-.26-2.09-.25h-.66s-1.14.01-1.14.01l-.05.06c.05.94.08,1.92.08,4.46,0,.88,0,1.29-.03,2.07l.05.06c.68-.04.83-.04,1.6-.04l.06-.05c-.08-1.08-.08-1.38-.09-2.49l.46-.02Z"
      />
      <path
        class="cls-1"
        d="M72.95,86.51c-.22.17-.69.52-1.47.52-1.06,0-1.82-.8-1.82-2.12,0-.8.28-2.21,1.8-2.21.71,0,1.09.27,1.33.45l.08-.02.08-1.29-.04-.05c-.34-.13-.91-.34-1.73-.34-2.42,0-3.26,1.86-3.26,3.51,0,1.79,1.1,3.37,3.38,3.37.78,0,1.3-.2,1.6-.32l.05-.06.06-1.4-.06-.04Z"
      />
      <path
        class="cls-1"
        d="M75.77,85.29l.47-1.58.33-1.1.28,1.22.34,1.46h-1.42ZM77.75,81.55c-.9.02-1.08.02-2.08.02l-.07.06c-.5,1.59-.8,2.54-2.18,6.48l.04.07h1.46l.06-.06.46-1.7h2.02l.4,1.73.07.06c.69-.03.87-.03,1.63-.03l.05-.07c-1.13-4.01-1.26-4.44-1.8-6.51l-.07-.05Z"
      />
      <path
        class="cls-1"
        d="M82.34,86.98c-.02-.92-.03-1.79-.03-2.69,0-.5,0-1.01,0-1.51.19-.02.38-.03.57-.03.57,0,1.69,0,1.69,2,0,1.17-.44,1.69-.67,1.88-.42.34-1.07.34-1.58.34M81.83,88.18c.24.02.49.02.74.02,1.05,0,2.74-.04,3.43-1.71.25-.61.31-1.37.31-1.78,0-.89-.2-1.56-.43-1.98-.63-1.16-1.84-1.2-2.91-1.2-.43,0-.86.02-1.29.04h-1s-.05.06-.05.06c.04.9.08,1.69.08,4.28,0,.92,0,1.47-.03,2.24l.06.03h1.1Z"
      />
      <path
        class="cls-1"
        d="M91.57,83.04c.19.21.27.49.33.75.07.36.09.7.1.93.04,1.4-.27,2.42-1.35,2.42-1.3,0-1.38-1.52-1.38-2.36,0-1.12.27-1.7.71-1.98.25-.15.51-.19.68-.19.35,0,.68.16.91.43M93.04,82.44c-.16-.2-.34-.38-.56-.52-.48-.33-1.13-.47-1.79-.47-.58,0-1.18.1-1.67.39-1.15.65-1.35,1.73-1.43,2.13-.05.32-.08.64-.08.96,0,.64.08,1.83.95,2.65.72.66,1.69.76,2.16.76.72,0,1.46-.18,2.01-.63.93-.77,1.11-2.04,1.11-2.83,0-1.47-.47-2.14-.7-2.43"
      />
      <path
        class="cls-1"
        d="M97.83,84.16c-.79-.33-1.2-.5-1.2-.92,0-.28.27-.66.89-.66.71,0,1.13.29,1.48.53l.08-.03.07-1.23-.04-.07c-.4-.17-.83-.35-1.73-.35-1.76,0-2.37.99-2.37,1.99,0,1.14.88,1.55,1.41,1.79l.31.14c.64.28,1.14.51,1.14,1,0,.35-.31.77-1.12.77-.86,0-1.33-.37-1.6-.59l-.09.03-.06,1.32.06.07c.1.04.2.08.3.11.22.08.76.24,1.47.24.28,0,1-.04,1.56-.3.78-.38,1.12-1.09,1.12-1.89,0-.53-.2-1.11-.7-1.49-.25-.18-.5-.3-.73-.4l-.24-.09Z"
      />
      <path
        class="cls-1"
        d="M107.67,86.92c-1.1.06-1.36.07-2.56.07l-.03-1.64h2.19l.07-.05.05-1.06-.04-.06-2.27.04v-1.49c1.06,0,1.28,0,2.41.03l.05-.06.06-1.09-.05-.04h-4.11l-.06.06c.06.91.08,1.25.08,3.76,0,1.18-.02,1.77-.05,2.74l.05.04h4.12l.07-.06.07-1.14-.06-.07Z"
      />
      <path
        class="cls-1"
        d="M111.38,84.16c-.79-.33-1.2-.5-1.2-.92,0-.28.27-.66.89-.66.71,0,1.13.29,1.47.53l.08-.03.08-1.23-.05-.07c-.4-.17-.82-.35-1.73-.35-1.76,0-2.37.99-2.37,1.99,0,1.14.88,1.55,1.4,1.79l.31.14c.64.28,1.14.51,1.14,1,0,.35-.31.77-1.12.77s-1.32-.37-1.6-.59l-.09.03-.07,1.32.05.07c.11.04.2.08.31.11.21.08.77.24,1.47.24.28,0,.99-.04,1.55-.3.79-.38,1.12-1.09,1.12-1.89,0-.53-.2-1.11-.7-1.49-.26-.18-.5-.3-.72-.4l-.24-.09Z"
      />
      <path
        class="cls-1"
        d="M115.85,82.69c.21-.01.41-.01.61-.01.82.02,1.05.44,1.05.99,0,.12,0,.67-.5.95-.26.14-.6.15-1.16.15v-2.07ZM115.43,81.55l-1.19.03-.06.05c.04,1.22.07,2.03.07,3.1,0,1.14-.03,2.28-.06,3.42l.06.05c.69-.03.84-.03,1.59-.03l.05-.05c-.04-1.01-.04-1.25-.04-2.21,1.05,0,2.17,0,2.84-.81.26-.32.49-.85.49-1.51,0-.4-.09-1.3-.87-1.73-.56-.33-1.36-.33-2.06-.33h-.83Z"
      />
      <path
        class="cls-1"
        d="M121.28,85.29l.46-1.58.33-1.1.28,1.22.35,1.46h-1.42ZM123.25,81.55c-.9.02-1.08.02-2.08.02l-.07.06c-.49,1.59-.79,2.54-2.16,6.48l.03.07h1.46l.07-.06.46-1.7h2.02l.41,1.73.05.06c.69-.03.87-.03,1.64-.03l.04-.07c-1.13-4.01-1.26-4.44-1.79-6.51l-.07-.05Z"
      />
      <path
        class="cls-1"
        d="M130.5,79.65c-.2.18-.48.42-.81.42-.21,0-.41-.07-.61-.14l-.37-.12c-.17-.06-.31-.09-.5-.09-.43,0-.62.16-.83.31l-.04.06v1s.04.02.04.02c.21-.14.47-.31.8-.31.21,0,.42.07.64.14l.28.1c.19.07.33.13.54.13.4,0,.66-.2.87-.37l.04-.07v-1.05l-.07-.03ZM131.76,81.55c-.59.02-.75.03-1.33.02l-.04.06.06,1.27.04,1.29.04,1.53-.02.02c-.25-.46-.3-.54-.77-1.25l-.85-1.24c-.71-1.06-.85-1.27-1.08-1.65l-.06-.04c-.75.03-.86.03-1.54.02l-.05.06c.05,1.45.08,2.53.08,3.78,0,.92-.02,1.83-.03,2.74l.04.06c.63-.03.83-.03,1.37-.03l.04-.06-.1-2.05-.03-1.14-.05-1.24.02-.02c.42.73.57.98,1.21,1.91l.93,1.37.84,1.22.07.04c.57-.03.74-.03,1.24-.03l.04-.04c0-1.36-.02-2.28-.02-3.4,0-1.04.01-2.08.02-3.14l-.05-.05Z"
      />
      <path
        class="cls-1"
        d="M137.07,83.04c.19.21.27.49.33.75.08.36.09.7.11.93.04,1.4-.27,2.42-1.35,2.42-1.3,0-1.39-1.52-1.39-2.36,0-1.12.27-1.7.71-1.98.25-.15.51-.19.68-.19.35,0,.69.16.91.43M138.55,82.44c-.16-.2-.35-.38-.56-.52-.48-.33-1.13-.47-1.79-.47-.58,0-1.17.1-1.67.39-1.14.65-1.35,1.73-1.43,2.13-.06.32-.08.64-.08.96,0,.64.07,1.83.95,2.65.71.66,1.69.76,2.16.76.72,0,1.45-.18,2-.63.93-.77,1.11-2.04,1.11-2.83,0-1.47-.46-2.14-.7-2.43"
      />
      <path
        class="cls-1"
        d="M144.65,86.9c-1.02.06-1.84.07-2.12.07h-.19c-.02-2.5,0-3.13.07-5.37l-.06-.05c-.8.03-1.02.03-1.66.03l-.05.05c.04.75.05.98.05,2.09,0,1.47,0,2.95,0,4.43l.04.05c1.84-.03,2.17-.03,3.86-.03l.05-.05.07-1.18-.04-.04Z"
      />
      <path
        class="cls-1"
        d="M150.03,86.92c-1.1.06-1.37.07-2.57.07v-1.64s2.17,0,2.17,0l.07-.05.05-1.06-.04-.06-2.26.04v-1.49c1.05,0,1.27,0,2.4.03l.05-.06.06-1.09-.04-.04h-4.11l-.05.06c.05.91.07,1.25.07,3.76,0,1.18-.01,1.77-.04,2.74l.04.04h4.13l.08-.06.06-1.14-.05-.07Z"
      />
      <path
        class="cls-1"
        d="M153.74,84.16c-.79-.33-1.2-.5-1.2-.92,0-.28.27-.66.88-.66.71,0,1.14.29,1.49.53l.08-.03.08-1.23-.04-.07c-.41-.17-.83-.35-1.74-.35-1.76,0-2.37.99-2.37,1.99,0,1.14.88,1.55,1.4,1.79l.31.14c.64.28,1.14.51,1.14,1,0,.35-.31.77-1.12.77-.85,0-1.33-.37-1.6-.59l-.1.03-.07,1.32.06.07c.1.04.2.08.31.11.21.08.77.24,1.47.24.28,0,.99-.04,1.55-.3.79-.38,1.12-1.09,1.12-1.89,0-.53-.2-1.11-.7-1.49-.25-.18-.5-.3-.72-.4l-.24-.09Z"
      />
    </svg>
  );
}
