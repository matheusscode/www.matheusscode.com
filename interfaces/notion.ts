export interface JourneyPost {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: null;
}

export interface TedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  media: Media;
  date: DateClass;
  title_en: DateClass;
  slug: DateClass;
  description_pt: DateClass;
  description_en: DateClass;
  title_pt: TitlePt;
}

export interface DateClass {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Media {
  id: string;
  type: string;
  files: FileElement[];
}

export interface TitlePt {
  id: string;
  type: string;
  title: RichText[];
}

export interface FileElement {
  name: string;
  type: string;
  file: FileFile;
}

export interface FileFile {
  url: string;
  expiry_time: Date;
}
