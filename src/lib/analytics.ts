export const Events = {
  LANDING_VIEW:                'landing_view',
  HERO_CREATE_ACCOUNT_CLICK:   'hero_create_account_click',
  HERO_LOGIN_CLICK:            'hero_login_click',
  SCHOOL_SECTION_CTA_CLICK:    'school_section_cta_click',
  HEALTH_SECTION_CTA_CLICK:    'health_section_cta_click',
  FAMILY_SECTION_CTA_CLICK:    'family_section_cta_click',
  FOOTER_CREATE_ACCOUNT_CLICK: 'footer_create_account_click',
  FOOTER_LOGIN_CLICK:          'footer_login_click',
  SUPPORT_CLICK:               'support_click',
  PRIVACY_CLICK:               'privacy_click',
  ABOUT_CLICK:                 'about_click',
} as const

export type EventName = typeof Events[keyof typeof Events]

// Ativar quando pronto: Google Analytics, Plausible, PostHog
export function trackEvent(_name: EventName, _properties?: Record<string, unknown>): void {}
