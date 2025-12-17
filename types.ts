export interface VideoResource {
  type: 'video';
  id: string; // YouTube ID
  authorName: string;
  authorImg: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

export interface ToolResource {
  type: 'tool';
  id: string;
  name: string;
  iconUrl: string;
  siteUrl: string;
  category: string;
}

export type ResourceItem = VideoResource | ToolResource;