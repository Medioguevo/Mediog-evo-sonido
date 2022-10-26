import type { RequestHandler } from "@sveltejs/kit";
import app_config from "../../app_config"

export const prerender = true;

export const GET: RequestHandler = function get({ setHeaders }) {

  const { backgroundColor, description, shortName, name, themeColor } = app_config;

  const manifest = {
    $schema: "https://json.schemastore.org/web-manifest-combined.json",
    name: name,
    short_name: shortName,
    description: description,
    start_url: "/",
    background_color: backgroundColor,
    theme_color: themeColor,
    display: 'standalone',
    icons: [
      {
        "src": "images/icon.svg",
        "type": "image/svg+xml",
        "sizes": "144x144",
      },
      {
        "src": "images/splash-icon.png",
        "type": "image/png",
        "sizes": "512x512",
      },
      {
        "src": "images/icon.svg",
        "sizes": "192x192",
        "type": "image/svg+xml",
        "purpose": "maskable"
      },
    ],
/*
    related_applications: [{
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }]
*/
  }
	setHeaders({
		'content-type': 'application/json',
	});
	return new Response(JSON.stringify(manifest));
};

