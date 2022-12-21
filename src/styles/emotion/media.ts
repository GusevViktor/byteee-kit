const breakpoints = {
  mp: 320, // MobilePortrait
  ml: 480, // MobileLandscape
  tp: 768, // TabletPortrait
  tl: 1024, // TabletLandscape
  d: 1280, // Desktop
  ds: 1440, // Desktop S
  dhd: 1920, // DesktopHD
}

type QueryType = keyof typeof breakpoints;

const createMedia = (query: QueryType) => (
  `@media (min-width: ${breakpoints[query]}px)`
)

const media = {
  mp: createMedia("mp"),
  ml: createMedia("ml"),
  tp: createMedia("tp"),
  tl: createMedia("tl"),
  d: createMedia("d"),
  ds: createMedia("ds"),
  dhd: createMedia("dhd"),
}

export default media
