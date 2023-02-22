import type { WallpaperConfig } from "components/system/Desktop/Wallpapers/types";
import { disableControls, libs } from "components/system/Desktop/Wallpapers/vantaWaves/config";
import type { VantaWavesConfig } from "components/system/Desktop/Wallpapers/vantaWaves/types";
import { loadFiles } from "utils/functions";

const showWebsite = (
  el: HTMLElement | null,
  config: WallpaperConfig = {} as WallpaperConfig
): void => {
  if (!el) return;
  el.innerHTML = `<iframe src="https://jamesmorgan.ca" style="width:100%; height:100%; border:none;"></iframe>`;
};

export default showWebsite;
