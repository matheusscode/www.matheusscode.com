"use server";

import { JourneyPost } from "@/interfaces/notion";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPosts(databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        direction: "descending",
        property: "date",
      },
    ],
  });

  const typedResponse = response.results as unknown as JourneyPost[];

  return typedResponse.map((post) => {
    return {
      id: post.id,
      title_pt: post.properties?.title_pt.title?.[0]?.plain_text,
      description_pt:
        post.properties?.description_pt?.rich_text?.[0]?.plain_text,
      title_en: post.properties?.title_en.rich_text?.[0].plain_text,
      description_en:
        post.properties?.description_en?.rich_text?.[0].plain_text,
      date: post.properties?.date?.rich_text?.[0]?.plain_text,
      media: post.properties?.media?.files?.[0]?.file?.url,
    };
  });
}
