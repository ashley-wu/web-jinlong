import { type MetadataRoute } from "next"

import { BASE_URL, PATH } from "@/lib/path"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/${PATH.FLEET}`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/${PATH.KEELUNG_ISLET_EXPLORE}`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/${PATH.KEELUNG_ISLET_TOUR}`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/${PATH.OFFSHORE_FISHING_TOUR}`,
      lastModified: new Date()
    },
  ]
}