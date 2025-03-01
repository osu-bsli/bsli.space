/* Google Analytics stuff */
export const CAT_NECESSARY = "necessary";
export const CAT_ANALYTICS = "analytics";
export const CAT_ADVERTISEMENT = "advertisement";
export const CAT_FUNCTIONALITY = "functionality";
export const CAT_SECURITY = "security";

export const SERVICE_AD_STORAGE = 'ad_storage'
export const SERVICE_AD_USER_DATA = 'ad_user_data'
export const SERVICE_AD_PERSONALIZATION = 'ad_personalization'
export const SERVICE_ANALYTICS_STORAGE = 'analytics_storage'
export const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage'
export const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage'
export const SERVICE_SECURITY_STORAGE = 'security_storage'

import * as CookieConsent from "vanilla-cookieconsent";

declare global {
  interface Window {
    dataLayer: any;
    updateGtagConsent: any;
  }
}

/**
 * Update gtag consent according to the users choices made in CookieConsent UI
 */

export function updateGtagConsent() {
    function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
    }

    gtag('consent', 'update', {
        [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
        [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
        [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
        [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
        [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
        [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
        [SERVICE_SECURITY_STORAGE]: CookieConsent.acceptedService(SERVICE_SECURITY_STORAGE, CAT_SECURITY) ? 'granted' : 'denied',
    });
};

export function initGoogleAnalyticsConsent() {
    // Define dataLayer and the gtag function.
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
    }

    // Set default consent to 'denied' (this should happen before changing any other dataLayer)
    gtag("consent", "default", {
        [SERVICE_AD_STORAGE]: "denied",
        [SERVICE_AD_USER_DATA]: "denied",
        [SERVICE_AD_PERSONALIZATION]: "denied",
        [SERVICE_ANALYTICS_STORAGE]: "denied",
        [SERVICE_FUNCTIONALITY_STORAGE]: "denied",
        [SERVICE_PERSONALIZATION_STORAGE]: "denied",
        [SERVICE_SECURITY_STORAGE]: "denied"
    });

    CookieConsent.run({
        // See: https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
        // ...
  
        // Trigger consent update when user choices change
        onFirstConsent: updateGtagConsent,
        onConsent: updateGtagConsent,
        onChange: updateGtagConsent,
  
        // Configure categories and services
        categories: {
          [CAT_NECESSARY]: {
            enabled: true,  // this category is enabled by default
            readOnly: true,  // this category cannot be disabled
          },
          [CAT_ANALYTICS]: {
            autoClear: {
              cookies: [
                {
                  name: /^_ga/,   // regex: match all cookies starting with '_ga'
                },
                {
                  name: '_gid',   // string: exact cookie name
                }
              ]
            },
            // See: https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
              [SERVICE_ANALYTICS_STORAGE]: {
                label: 'Enables storage (such as cookies) related to analytics e.g. visit duration.',
              }
            }
          },
        },
  
        language: {
          default: 'en',
          translations: {
            en: {
              // See: https://support.google.com/tagmanager/answer/10718549?hl=en
              consentModal: {
                title: 'We use cookies',
                description: 'We use cookies to keep track of how people visit our site. That\'s all!',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                showPreferencesBtn: 'Manage individual preferences'
              },
              preferencesModal: {
                title: 'Manage cookie preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Accept current selection',
                closeIconLabel: 'Close modal',
                sections: [
                  {
                    title: "Cookie usage",
                    description: "We use cookies to keep track of how people visit our site. That's all!'"
                  },
                  {
                    title: "Strictly necessary cookies",
                    description: "These cookies are essential for the proper functioning of the website, for example for user authentication.",
                    linkedCategory: CAT_NECESSARY,
                  },
                  {
                    title: "Analytics",
                    description: 'Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user’s experience.',
                    linkedCategory: CAT_ANALYTICS,
                    cookieTable: {
                      headers: {
                        name: "Name",
                        domain: "Service",
                        description: "Description",
                        expiration: "Expiration"
                      },
                      body: [
                        {
                          name: "_ga",
                          domain: "Google Analytics",
                          description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
                          expiration: "Expires after 12 days"
                        },
                        {
                          name: "_gid",
                          domain: "Google Analytics",
                          description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
                          expiration: "Session"
                        }
                      ]
                    }
                  },
                  {
                    title: 'More information',
                    description: 'For any queries in relation to the policy on cookies and your choices, please <a href="contact">contact us</a>.'
                  }
                ]
              }
            }
          }
        }
      });
}