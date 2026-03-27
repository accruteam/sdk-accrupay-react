import sdkPackageJson from '../../package.json' assert { type: 'json' };

type BrowserNetworkInformation = {
  effectiveType?: string;
  rtt?: number;
  downlink?: number;
  saveData?: boolean;
};

type BrowserNavigator = Navigator & {
  deviceMemory?: number;
  connection?: BrowserNetworkInformation;
};

export type AccruPaySdkMetadata = {
  sdk: {
    name: string;
    version: string;
  };
};

export type AccruPayBrowserTelemetryMetadata = {
  runtime: {
    name: 'browser' | 'unknown';
    userAgent?: string;
  };
  platform?: {
    platform?: string;
    language?: string;
    languages?: readonly string[];
  };
  time: {
    timezone?: string;
  };
  display?: {
    viewport?: {
      width?: number;
      height?: number;
      devicePixelRatio?: number;
    };
    screen?: {
      width?: number;
      height?: number;
      colorDepth?: number;
    };
  };
  device?: {
    hardwareConcurrency?: number;
    deviceMemory?: number;
    maxTouchPoints?: number;
  };
  automation?: {
    webdriver?: boolean;
  };
  network?: BrowserNetworkInformation;
};

export type AccruPayAppMetadata = AccruPaySdkMetadata & {
  telemetry?: AccruPayBrowserTelemetryMetadata;
  timestamp: string;
};

export const getMandatoryMetadata = (): AccruPaySdkMetadata => ({
  sdk: {
    name: sdkPackageJson.name ?? '@accrupay/react',
    version: sdkPackageJson.version ?? 'unknown',
  },
});

export const getBrowserTelemetryMetadata =
  (): AccruPayBrowserTelemetryMetadata => {
    try {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return {
          runtime: {
            name: 'unknown',
          },
          time: {
            timezone: Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone,
          },
        };
      }

      const nav = navigator as BrowserNavigator;
      const connection = nav.connection;

      return {
        runtime: {
          name: 'browser',
          userAgent: nav.userAgent,
        },
        platform: {
          platform: nav.platform,
          language: nav.language,
          languages: nav.languages,
        },
        time: {
          timezone: Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone,
        },
        display: {
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio,
          },
          screen: {
            width: window.screen?.width,
            height: window.screen?.height,
            colorDepth: window.screen?.colorDepth,
          },
        },
        device: {
          hardwareConcurrency: nav.hardwareConcurrency,
          deviceMemory: nav.deviceMemory,
          maxTouchPoints: nav.maxTouchPoints,
        },
        automation: {
          webdriver: nav.webdriver,
        },
        network: connection
          ? {
              effectiveType: connection.effectiveType,
              rtt: connection.rtt,
              downlink: connection.downlink,
              saveData: connection.saveData,
            }
          : undefined,
      };
    } catch {
      return {
        runtime: {
          name: 'unknown',
        },
        time: {
          timezone: undefined,
        },
      };
    }
  };

export const collectAppMetadata = (
  enableTelemetry = true,
): AccruPayAppMetadata => {
  const mandatory = getMandatoryMetadata();
  const telemetry = enableTelemetry ? getBrowserTelemetryMetadata() : undefined;

  return {
    ...mandatory,
    ...(telemetry && { telemetry }),
    timestamp: new Date().toISOString(),
  };
};
