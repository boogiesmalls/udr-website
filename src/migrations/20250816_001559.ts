import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_column_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."spons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_header_media_group_media_rounded" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_content_header_large_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."media_mode" AS ENUM('media', 'embed');
  CREATE TYPE "public"."enum_pages_blocks_content_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_text_layout" AS ENUM('centered', 'left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_content_text_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_text_media_layout" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_content_quote_quote_type" AS ENUM('singleQuote', 'quoteColumns');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_card_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_column_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_header_media_group_media_rounded" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_header_large_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_text_layout" AS ENUM('centered', 'left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_content_text_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_text_media_layout" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_content_quote_quote_type" AS ENUM('singleQuote', 'quoteColumns');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_card_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_column_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_proj_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_hero_media_group_media_rounded" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum_proj_blocks_hero_grid_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_team_list_items_media_group_media_round" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum_proj_blocks_team_list_items_person_group_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_team_list_cta_group_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_content_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_content_header_media_group_media_rounded" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum_proj_blocks_content_header_large_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_content_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_content_text_layout" AS ENUM('centered', 'left', 'right');
  CREATE TYPE "public"."enum_proj_blocks_content_text_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_blocks_content_text_media_layout" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_proj_blocks_content_quote_quote_type" AS ENUM('singleQuote', 'quoteColumns');
  CREATE TYPE "public"."enum_proj_blocks_card_grid_card_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_proj_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__proj_v_blocks_column_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__proj_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_hero_media_group_media_rounded" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum__proj_v_blocks_hero_grid_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_team_list_items_media_group_media_round" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum__proj_v_blocks_team_list_items_person_group_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_team_list_cta_group_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_content_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_content_header_media_group_media_rounded" AS ENUM('none', 'top', 'left', 'right', 'bottom');
  CREATE TYPE "public"."enum__proj_v_blocks_content_header_large_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_content_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_content_text_layout" AS ENUM('centered', 'left', 'right');
  CREATE TYPE "public"."enum__proj_v_blocks_content_text_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_blocks_content_text_media_layout" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__proj_v_blocks_content_quote_quote_type" AS ENUM('singleQuote', 'quoteColumns');
  CREATE TYPE "public"."enum__proj_v_blocks_card_grid_card_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__proj_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_column_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_column_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_grid_grid_items_card_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar
  );
  
  CREATE TABLE "pages_blocks_sponsors_sponsor_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sponsor_group_sponsor_media_id" integer,
  	"sponsor_group_link_type" "spons_link_type" DEFAULT 'reference',
  	"sponsor_group_link_new_tab" boolean,
  	"sponsor_group_link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_content_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_content_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_group_media_rounded" "enum_pages_blocks_content_header_media_group_media_rounded" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_header_large_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_content_header_large_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content_header_large_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_group_mode" "media_mode" DEFAULT 'media',
  	"media_group_media_id" integer,
  	"media_group_iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_content_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_content_text_layout" DEFAULT 'centered',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_text_media_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "pages_blocks_content_text_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_content_text_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content_text_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_content_text_media_layout" DEFAULT 'left',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_quote_quote_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_content_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote_type" "enum_pages_blocks_content_quote_quote_type",
  	"single_quote" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid_card_items_grid_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid_card_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_card_grid_card_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"grid_titles_title" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"grid_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"attribution" varchar
  );
  
  CREATE TABLE "pages_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_column_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sponsors_sponsor_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sponsor_group_sponsor_media_id" integer,
  	"sponsor_group_link_type" "spons_link_type" DEFAULT 'reference',
  	"sponsor_group_link_new_tab" boolean,
  	"sponsor_group_link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_content_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_group_media_rounded" "enum__pages_v_blocks_content_header_media_group_media_rounded" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_header_large_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_content_header_large_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_header_large_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_group_mode" "media_mode" DEFAULT 'media',
  	"media_group_media_id" integer,
  	"media_group_iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_content_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_content_text_layout" DEFAULT 'centered',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_text_media_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_text_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_content_text_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_text_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_content_text_media_layout" DEFAULT 'left',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_quote_quote_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote_type" "enum__pages_v_blocks_content_quote_quote_type",
  	"single_quote" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid_card_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_card_grid_card_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"grid_titles_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"grid_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"attribution" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_column_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_proj_blocks_column_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb
  );
  
  CREATE TABLE "proj_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "proj_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_group_media_rounded" "enum_proj_blocks_hero_media_group_media_rounded" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_hero_grid_grid_items_card_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar
  );
  
  CREATE TABLE "proj_blocks_hero_grid_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_hero_grid_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"media_id" integer,
  	"card_titles_title" varchar
  );
  
  CREATE TABLE "proj_blocks_hero_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"grid_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_sponsors_sponsor_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sponsor_group_sponsor_media_id" integer,
  	"sponsor_group_link_type" "spons_link_type" DEFAULT 'reference',
  	"sponsor_group_link_new_tab" boolean,
  	"sponsor_group_link_url" varchar
  );
  
  CREATE TABLE "proj_blocks_sponsors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_ticker_ticker_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar
  );
  
  CREATE TABLE "proj_blocks_ticker" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_team_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_group_media_round" "enum_proj_blocks_team_list_items_media_group_media_round" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"person_group_name" varchar,
  	"person_group_role" varchar,
  	"person_group_link_type" "enum_proj_blocks_team_list_items_person_group_link_type" DEFAULT 'reference',
  	"person_group_link_new_tab" boolean,
  	"person_group_link_url" varchar,
  	"person_group_link_label" varchar,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "proj_blocks_team_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"cta_group_cta_title" varchar,
  	"cta_group_link_type" "enum_proj_blocks_team_list_cta_group_link_type" DEFAULT 'reference',
  	"cta_group_link_new_tab" boolean,
  	"cta_group_link_url" varchar,
  	"cta_group_link_label" varchar,
  	"cta_group_link_appearance" "link_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_content_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_content_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "proj_blocks_content_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_group_media_rounded" "enum_proj_blocks_content_header_media_group_media_rounded" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_content_header_large_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_content_header_large_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "proj_blocks_content_header_large_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_group_mode" "media_mode" DEFAULT 'media',
  	"media_group_media_id" integer,
  	"media_group_iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_content_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_content_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "proj_blocks_content_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_proj_blocks_content_text_layout" DEFAULT 'centered',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_content_text_media_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "proj_blocks_content_text_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_content_text_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "proj_blocks_content_text_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_proj_blocks_content_text_media_layout" DEFAULT 'left',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_content_quote_quote_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "proj_blocks_content_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote_type" "enum_proj_blocks_content_quote_quote_type",
  	"single_quote" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_card_grid_card_items_grid_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar
  );
  
  CREATE TABLE "proj_blocks_card_grid_card_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_proj_blocks_card_grid_card_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"grid_titles_title" varchar
  );
  
  CREATE TABLE "proj_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"grid_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"attribution" varchar
  );
  
  CREATE TABLE "proj_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "proj" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_proj_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "proj_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"proj_id" integer
  );
  
  CREATE TABLE "_proj_v_blocks_column_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__proj_v_blocks_column_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_group_media_rounded" "enum__proj_v_blocks_hero_media_group_media_rounded" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_hero_grid_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_hero_grid_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"media_id" integer,
  	"card_titles_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_hero_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"grid_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_sponsors_sponsor_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sponsor_group_sponsor_media_id" integer,
  	"sponsor_group_link_type" "spons_link_type" DEFAULT 'reference',
  	"sponsor_group_link_new_tab" boolean,
  	"sponsor_group_link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_sponsors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_ticker_ticker_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_ticker" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_team_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_group_media_round" "enum__proj_v_blocks_team_list_items_media_group_media_round" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"person_group_name" varchar,
  	"person_group_role" varchar,
  	"person_group_link_type" "enum__proj_v_blocks_team_list_items_person_group_link_type" DEFAULT 'reference',
  	"person_group_link_new_tab" boolean,
  	"person_group_link_url" varchar,
  	"person_group_link_label" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_team_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"cta_group_cta_title" varchar,
  	"cta_group_link_type" "enum__proj_v_blocks_team_list_cta_group_link_type" DEFAULT 'reference',
  	"cta_group_link_new_tab" boolean,
  	"cta_group_link_url" varchar,
  	"cta_group_link_label" varchar,
  	"cta_group_link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_content_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_group_media_rounded" "enum__proj_v_blocks_content_header_media_group_media_rounded" DEFAULT 'none',
  	"media_group_media_id" integer,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_header_large_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_content_header_large_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_header_large_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_group_mode" "media_mode" DEFAULT 'media',
  	"media_group_media_id" integer,
  	"media_group_iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_content_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__proj_v_blocks_content_text_layout" DEFAULT 'centered',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_text_media_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_text_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_content_text_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_text_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__proj_v_blocks_content_text_media_layout" DEFAULT 'left',
  	"subheading" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_quote_quote_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_content_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote_type" "enum__proj_v_blocks_content_quote_quote_type",
  	"single_quote" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_card_grid_card_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__proj_v_blocks_card_grid_card_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"grid_titles_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"grid_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"attribution" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proj_v_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_proj_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__proj_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_proj_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"proj_id" integer
  );
  
  ALTER TABLE "pages_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "spons_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_spons_items_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_version_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "spons_items" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_spons_items_v" CASCADE;
  DROP TABLE "projects_populated_authors" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "_projects_v_version_populated_authors" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_rels" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_projects_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_projects_fk";
  
  ALTER TABLE "redirects_rels" DROP CONSTRAINT "redirects_rels_projects_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_projects_fk";
  
  DROP INDEX "pages_rels_projects_id_idx";
  DROP INDEX "_pages_v_rels_projects_id_idx";
  DROP INDEX "redirects_rels_projects_id_idx";
  DROP INDEX "payload_locked_documents_rels_projects_id_idx";
  DROP INDEX "header_rels_projects_id_idx";
  ALTER TABLE "pages_blocks_hero_links" ALTER COLUMN "link_appearance" DROP DEFAULT;
  ALTER TABLE "pages_blocks_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."link_appearance" USING "link_appearance"::text::"public"."link_appearance";
  ALTER TABLE "pages_blocks_hero_links" ALTER COLUMN "link_appearance" SET DEFAULT 'default';
  ALTER TABLE "pages_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" DROP DEFAULT;
  ALTER TABLE "pages_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DATA TYPE "public"."link_appearance" USING "cta_group_link_appearance"::text::"public"."link_appearance";
  ALTER TABLE "pages_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_hero_links" ALTER COLUMN "link_appearance" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."link_appearance" USING "link_appearance"::text::"public"."link_appearance";
  ALTER TABLE "_pages_v_blocks_hero_links" ALTER COLUMN "link_appearance" SET DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DATA TYPE "public"."link_appearance" USING "cta_group_link_appearance"::text::"public"."link_appearance";
  ALTER TABLE "_pages_v_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DEFAULT 'default';
  ALTER TABLE "pages_rels" ADD COLUMN "proj_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "proj_id" integer;
  ALTER TABLE "redirects_rels" ADD COLUMN "proj_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "proj_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "proj_id" integer;
  ALTER TABLE "pages_blocks_column_columns" ADD CONSTRAINT "pages_blocks_column_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column" ADD CONSTRAINT "pages_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_grid_grid_items_card_titles_subtitles" ADD CONSTRAINT "pages_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_grid_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_sponsors_sponsor_items" ADD CONSTRAINT "pages_blocks_sponsors_sponsor_items_sponsor_group_sponsor_media_id_media_id_fk" FOREIGN KEY ("sponsor_group_sponsor_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_sponsors_sponsor_items" ADD CONSTRAINT "pages_blocks_sponsors_sponsor_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sponsors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_header_links" ADD CONSTRAINT "pages_blocks_content_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_header" ADD CONSTRAINT "pages_blocks_content_header_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_header" ADD CONSTRAINT "pages_blocks_content_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_header_large_media_links" ADD CONSTRAINT "pages_blocks_content_header_large_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_header_large_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_header_large_media" ADD CONSTRAINT "pages_blocks_content_header_large_media_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_header_large_media" ADD CONSTRAINT "pages_blocks_content_header_large_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_text_links" ADD CONSTRAINT "pages_blocks_content_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_text" ADD CONSTRAINT "pages_blocks_content_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_text_media_images" ADD CONSTRAINT "pages_blocks_content_text_media_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_text_media_images" ADD CONSTRAINT "pages_blocks_content_text_media_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_text_media_links" ADD CONSTRAINT "pages_blocks_content_text_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_text_media" ADD CONSTRAINT "pages_blocks_content_text_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_quote_quote_columns" ADD CONSTRAINT "pages_blocks_content_quote_quote_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_quote" ADD CONSTRAINT "pages_blocks_content_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_card_items_grid_titles_subtitles" ADD CONSTRAINT "pages_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid_card_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_card_items" ADD CONSTRAINT "pages_blocks_card_grid_card_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid" ADD CONSTRAINT "pages_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid_images" ADD CONSTRAINT "pages_blocks_image_grid_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid_images" ADD CONSTRAINT "pages_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid" ADD CONSTRAINT "pages_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_columns" ADD CONSTRAINT "_pages_v_blocks_column_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column" ADD CONSTRAINT "_pages_v_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles" ADD CONSTRAINT "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_grid_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sponsors_sponsor_items" ADD CONSTRAINT "_pages_v_blocks_sponsors_sponsor_items_sponsor_group_sponsor_media_id_media_id_fk" FOREIGN KEY ("sponsor_group_sponsor_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sponsors_sponsor_items" ADD CONSTRAINT "_pages_v_blocks_sponsors_sponsor_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_sponsors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_header_links" ADD CONSTRAINT "_pages_v_blocks_content_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_header" ADD CONSTRAINT "_pages_v_blocks_content_header_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_header" ADD CONSTRAINT "_pages_v_blocks_content_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_header_large_media_links" ADD CONSTRAINT "_pages_v_blocks_content_header_large_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_header_large_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_header_large_media" ADD CONSTRAINT "_pages_v_blocks_content_header_large_media_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_header_large_media" ADD CONSTRAINT "_pages_v_blocks_content_header_large_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_text_links" ADD CONSTRAINT "_pages_v_blocks_content_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_text" ADD CONSTRAINT "_pages_v_blocks_content_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_text_media_images" ADD CONSTRAINT "_pages_v_blocks_content_text_media_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_text_media_images" ADD CONSTRAINT "_pages_v_blocks_content_text_media_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_text_media_links" ADD CONSTRAINT "_pages_v_blocks_content_text_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_text_media" ADD CONSTRAINT "_pages_v_blocks_content_text_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_quote_quote_columns" ADD CONSTRAINT "_pages_v_blocks_content_quote_quote_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_quote" ADD CONSTRAINT "_pages_v_blocks_content_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles" ADD CONSTRAINT "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid_card_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_card_items" ADD CONSTRAINT "_pages_v_blocks_card_grid_card_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid" ADD CONSTRAINT "_pages_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid_images" ADD CONSTRAINT "_pages_v_blocks_image_grid_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid_images" ADD CONSTRAINT "_pages_v_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid" ADD CONSTRAINT "_pages_v_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_column_columns" ADD CONSTRAINT "proj_blocks_column_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_column" ADD CONSTRAINT "proj_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero_links" ADD CONSTRAINT "proj_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero" ADD CONSTRAINT "proj_blocks_hero_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero" ADD CONSTRAINT "proj_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero_grid_grid_items_card_titles_subtitles" ADD CONSTRAINT "proj_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_hero_grid_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero_grid_grid_items" ADD CONSTRAINT "proj_blocks_hero_grid_grid_items_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero_grid_grid_items" ADD CONSTRAINT "proj_blocks_hero_grid_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_hero_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_hero_grid" ADD CONSTRAINT "proj_blocks_hero_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_sponsors_sponsor_items" ADD CONSTRAINT "proj_blocks_sponsors_sponsor_items_sponsor_group_sponsor_media_id_media_id_fk" FOREIGN KEY ("sponsor_group_sponsor_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_sponsors_sponsor_items" ADD CONSTRAINT "proj_blocks_sponsors_sponsor_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_sponsors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_sponsors" ADD CONSTRAINT "proj_blocks_sponsors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_ticker_ticker_items" ADD CONSTRAINT "proj_blocks_ticker_ticker_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_ticker"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_ticker" ADD CONSTRAINT "proj_blocks_ticker_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_team_list_items" ADD CONSTRAINT "proj_blocks_team_list_items_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_team_list_items" ADD CONSTRAINT "proj_blocks_team_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_team_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_team_list" ADD CONSTRAINT "proj_blocks_team_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_header_links" ADD CONSTRAINT "proj_blocks_content_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_content_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_header" ADD CONSTRAINT "proj_blocks_content_header_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_header" ADD CONSTRAINT "proj_blocks_content_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_header_large_media_links" ADD CONSTRAINT "proj_blocks_content_header_large_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_content_header_large_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_header_large_media" ADD CONSTRAINT "proj_blocks_content_header_large_media_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_header_large_media" ADD CONSTRAINT "proj_blocks_content_header_large_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_text_links" ADD CONSTRAINT "proj_blocks_content_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_content_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_text" ADD CONSTRAINT "proj_blocks_content_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_text_media_images" ADD CONSTRAINT "proj_blocks_content_text_media_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_text_media_images" ADD CONSTRAINT "proj_blocks_content_text_media_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_text_media_links" ADD CONSTRAINT "proj_blocks_content_text_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_text_media" ADD CONSTRAINT "proj_blocks_content_text_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_quote_quote_columns" ADD CONSTRAINT "proj_blocks_content_quote_quote_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_content_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_content_quote" ADD CONSTRAINT "proj_blocks_content_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_card_grid_card_items_grid_titles_subtitles" ADD CONSTRAINT "proj_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_card_grid_card_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_card_grid_card_items" ADD CONSTRAINT "proj_blocks_card_grid_card_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_card_grid" ADD CONSTRAINT "proj_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_image_grid_images" ADD CONSTRAINT "proj_blocks_image_grid_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_blocks_image_grid_images" ADD CONSTRAINT "proj_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_blocks_image_grid" ADD CONSTRAINT "proj_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj" ADD CONSTRAINT "proj_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proj_rels" ADD CONSTRAINT "proj_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_rels" ADD CONSTRAINT "proj_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proj_rels" ADD CONSTRAINT "proj_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_column_columns" ADD CONSTRAINT "_proj_v_blocks_column_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_column" ADD CONSTRAINT "_proj_v_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero_links" ADD CONSTRAINT "_proj_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero" ADD CONSTRAINT "_proj_v_blocks_hero_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero" ADD CONSTRAINT "_proj_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles" ADD CONSTRAINT "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_hero_grid_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero_grid_grid_items" ADD CONSTRAINT "_proj_v_blocks_hero_grid_grid_items_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero_grid_grid_items" ADD CONSTRAINT "_proj_v_blocks_hero_grid_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_hero_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_hero_grid" ADD CONSTRAINT "_proj_v_blocks_hero_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_sponsors_sponsor_items" ADD CONSTRAINT "_proj_v_blocks_sponsors_sponsor_items_sponsor_group_sponsor_media_id_media_id_fk" FOREIGN KEY ("sponsor_group_sponsor_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_sponsors_sponsor_items" ADD CONSTRAINT "_proj_v_blocks_sponsors_sponsor_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_sponsors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_sponsors" ADD CONSTRAINT "_proj_v_blocks_sponsors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_ticker_ticker_items" ADD CONSTRAINT "_proj_v_blocks_ticker_ticker_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_ticker"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_ticker" ADD CONSTRAINT "_proj_v_blocks_ticker_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_team_list_items" ADD CONSTRAINT "_proj_v_blocks_team_list_items_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_team_list_items" ADD CONSTRAINT "_proj_v_blocks_team_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_team_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_team_list" ADD CONSTRAINT "_proj_v_blocks_team_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_header_links" ADD CONSTRAINT "_proj_v_blocks_content_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_content_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_header" ADD CONSTRAINT "_proj_v_blocks_content_header_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_header" ADD CONSTRAINT "_proj_v_blocks_content_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_header_large_media_links" ADD CONSTRAINT "_proj_v_blocks_content_header_large_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_content_header_large_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_header_large_media" ADD CONSTRAINT "_proj_v_blocks_content_header_large_media_media_group_media_id_media_id_fk" FOREIGN KEY ("media_group_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_header_large_media" ADD CONSTRAINT "_proj_v_blocks_content_header_large_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_text_links" ADD CONSTRAINT "_proj_v_blocks_content_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_content_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_text" ADD CONSTRAINT "_proj_v_blocks_content_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_text_media_images" ADD CONSTRAINT "_proj_v_blocks_content_text_media_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_text_media_images" ADD CONSTRAINT "_proj_v_blocks_content_text_media_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_text_media_links" ADD CONSTRAINT "_proj_v_blocks_content_text_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_content_text_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_text_media" ADD CONSTRAINT "_proj_v_blocks_content_text_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_quote_quote_columns" ADD CONSTRAINT "_proj_v_blocks_content_quote_quote_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_content_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_content_quote" ADD CONSTRAINT "_proj_v_blocks_content_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles" ADD CONSTRAINT "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_card_grid_card_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_card_grid_card_items" ADD CONSTRAINT "_proj_v_blocks_card_grid_card_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_card_grid" ADD CONSTRAINT "_proj_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_image_grid_images" ADD CONSTRAINT "_proj_v_blocks_image_grid_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_image_grid_images" ADD CONSTRAINT "_proj_v_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_blocks_image_grid" ADD CONSTRAINT "_proj_v_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v" ADD CONSTRAINT "_proj_v_parent_id_proj_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."proj"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v" ADD CONSTRAINT "_proj_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_proj_v_rels" ADD CONSTRAINT "_proj_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_rels" ADD CONSTRAINT "_proj_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proj_v_rels" ADD CONSTRAINT "_proj_v_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_column_columns_order_idx" ON "pages_blocks_column_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_columns_parent_id_idx" ON "pages_blocks_column_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_order_idx" ON "pages_blocks_column" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_parent_id_idx" ON "pages_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_path_idx" ON "pages_blocks_column" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_grid_grid_items_card_titles_subtitles_order_idx" ON "pages_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_idx" ON "pages_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sponsors_sponsor_items_order_idx" ON "pages_blocks_sponsors_sponsor_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_sponsors_sponsor_items_parent_id_idx" ON "pages_blocks_sponsors_sponsor_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sponsors_sponsor_items_sponsor_group_sponsor_group_sponsor_media_idx" ON "pages_blocks_sponsors_sponsor_items" USING btree ("sponsor_group_sponsor_media_id");
  CREATE INDEX "pages_blocks_content_header_links_order_idx" ON "pages_blocks_content_header_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_header_links_parent_id_idx" ON "pages_blocks_content_header_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_header_order_idx" ON "pages_blocks_content_header" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_header_parent_id_idx" ON "pages_blocks_content_header" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_header_path_idx" ON "pages_blocks_content_header" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_header_media_group_media_group_media_idx" ON "pages_blocks_content_header" USING btree ("media_group_media_id");
  CREATE INDEX "pages_blocks_content_header_large_media_links_order_idx" ON "pages_blocks_content_header_large_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_header_large_media_links_parent_id_idx" ON "pages_blocks_content_header_large_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_header_large_media_order_idx" ON "pages_blocks_content_header_large_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_header_large_media_parent_id_idx" ON "pages_blocks_content_header_large_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_header_large_media_path_idx" ON "pages_blocks_content_header_large_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_header_large_media_media_group_media_group_media_idx" ON "pages_blocks_content_header_large_media" USING btree ("media_group_media_id");
  CREATE INDEX "pages_blocks_content_text_links_order_idx" ON "pages_blocks_content_text_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_text_links_parent_id_idx" ON "pages_blocks_content_text_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_text_order_idx" ON "pages_blocks_content_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_text_parent_id_idx" ON "pages_blocks_content_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_text_path_idx" ON "pages_blocks_content_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_text_media_images_order_idx" ON "pages_blocks_content_text_media_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_text_media_images_parent_id_idx" ON "pages_blocks_content_text_media_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_text_media_images_media_idx" ON "pages_blocks_content_text_media_images" USING btree ("media_id");
  CREATE INDEX "pages_blocks_content_text_media_links_order_idx" ON "pages_blocks_content_text_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_text_media_links_parent_id_idx" ON "pages_blocks_content_text_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_text_media_order_idx" ON "pages_blocks_content_text_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_text_media_parent_id_idx" ON "pages_blocks_content_text_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_text_media_path_idx" ON "pages_blocks_content_text_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_quote_quote_columns_order_idx" ON "pages_blocks_content_quote_quote_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_quote_quote_columns_parent_id_idx" ON "pages_blocks_content_quote_quote_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_quote_order_idx" ON "pages_blocks_content_quote" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_quote_parent_id_idx" ON "pages_blocks_content_quote" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_quote_path_idx" ON "pages_blocks_content_quote" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_grid_card_items_grid_titles_subtitles_order_idx" ON "pages_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_idx" ON "pages_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_card_items_order_idx" ON "pages_blocks_card_grid_card_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_card_items_parent_id_idx" ON "pages_blocks_card_grid_card_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_order_idx" ON "pages_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_parent_id_idx" ON "pages_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_path_idx" ON "pages_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_grid_images_order_idx" ON "pages_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_grid_images_parent_id_idx" ON "pages_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_grid_images_media_idx" ON "pages_blocks_image_grid_images" USING btree ("media_id");
  CREATE INDEX "pages_blocks_image_grid_order_idx" ON "pages_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_grid_parent_id_idx" ON "pages_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_grid_path_idx" ON "pages_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_column_columns_order_idx" ON "_pages_v_blocks_column_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_columns_parent_id_idx" ON "_pages_v_blocks_column_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_order_idx" ON "_pages_v_blocks_column" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_parent_id_idx" ON "_pages_v_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_path_idx" ON "_pages_v_blocks_column" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles_order_idx" ON "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_idx" ON "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sponsors_sponsor_items_order_idx" ON "_pages_v_blocks_sponsors_sponsor_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sponsors_sponsor_items_parent_id_idx" ON "_pages_v_blocks_sponsors_sponsor_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sponsors_sponsor_items_sponsor_group_sponsor_group_sponsor_media_idx" ON "_pages_v_blocks_sponsors_sponsor_items" USING btree ("sponsor_group_sponsor_media_id");
  CREATE INDEX "_pages_v_blocks_content_header_links_order_idx" ON "_pages_v_blocks_content_header_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_header_links_parent_id_idx" ON "_pages_v_blocks_content_header_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_header_order_idx" ON "_pages_v_blocks_content_header" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_header_parent_id_idx" ON "_pages_v_blocks_content_header" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_header_path_idx" ON "_pages_v_blocks_content_header" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_header_media_group_media_group_media_idx" ON "_pages_v_blocks_content_header" USING btree ("media_group_media_id");
  CREATE INDEX "_pages_v_blocks_content_header_large_media_links_order_idx" ON "_pages_v_blocks_content_header_large_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_header_large_media_links_parent_id_idx" ON "_pages_v_blocks_content_header_large_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_header_large_media_order_idx" ON "_pages_v_blocks_content_header_large_media" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_header_large_media_parent_id_idx" ON "_pages_v_blocks_content_header_large_media" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_header_large_media_path_idx" ON "_pages_v_blocks_content_header_large_media" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_header_large_media_media_group_media_group_media_idx" ON "_pages_v_blocks_content_header_large_media" USING btree ("media_group_media_id");
  CREATE INDEX "_pages_v_blocks_content_text_links_order_idx" ON "_pages_v_blocks_content_text_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_text_links_parent_id_idx" ON "_pages_v_blocks_content_text_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_text_order_idx" ON "_pages_v_blocks_content_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_text_parent_id_idx" ON "_pages_v_blocks_content_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_text_path_idx" ON "_pages_v_blocks_content_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_text_media_images_order_idx" ON "_pages_v_blocks_content_text_media_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_text_media_images_parent_id_idx" ON "_pages_v_blocks_content_text_media_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_text_media_images_media_idx" ON "_pages_v_blocks_content_text_media_images" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_content_text_media_links_order_idx" ON "_pages_v_blocks_content_text_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_text_media_links_parent_id_idx" ON "_pages_v_blocks_content_text_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_text_media_order_idx" ON "_pages_v_blocks_content_text_media" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_text_media_parent_id_idx" ON "_pages_v_blocks_content_text_media" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_text_media_path_idx" ON "_pages_v_blocks_content_text_media" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_quote_quote_columns_order_idx" ON "_pages_v_blocks_content_quote_quote_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_quote_quote_columns_parent_id_idx" ON "_pages_v_blocks_content_quote_quote_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_quote_order_idx" ON "_pages_v_blocks_content_quote" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_quote_parent_id_idx" ON "_pages_v_blocks_content_quote" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_quote_path_idx" ON "_pages_v_blocks_content_quote" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles_order_idx" ON "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_idx" ON "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_card_items_order_idx" ON "_pages_v_blocks_card_grid_card_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_card_items_parent_id_idx" ON "_pages_v_blocks_card_grid_card_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_order_idx" ON "_pages_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_parent_id_idx" ON "_pages_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_path_idx" ON "_pages_v_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_grid_images_order_idx" ON "_pages_v_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_grid_images_parent_id_idx" ON "_pages_v_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_grid_images_media_idx" ON "_pages_v_blocks_image_grid_images" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_image_grid_order_idx" ON "_pages_v_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_grid_parent_id_idx" ON "_pages_v_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_grid_path_idx" ON "_pages_v_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "proj_blocks_column_columns_order_idx" ON "proj_blocks_column_columns" USING btree ("_order");
  CREATE INDEX "proj_blocks_column_columns_parent_id_idx" ON "proj_blocks_column_columns" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_column_order_idx" ON "proj_blocks_column" USING btree ("_order");
  CREATE INDEX "proj_blocks_column_parent_id_idx" ON "proj_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_column_path_idx" ON "proj_blocks_column" USING btree ("_path");
  CREATE INDEX "proj_blocks_hero_links_order_idx" ON "proj_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "proj_blocks_hero_links_parent_id_idx" ON "proj_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_hero_order_idx" ON "proj_blocks_hero" USING btree ("_order");
  CREATE INDEX "proj_blocks_hero_parent_id_idx" ON "proj_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_hero_path_idx" ON "proj_blocks_hero" USING btree ("_path");
  CREATE INDEX "proj_blocks_hero_media_group_media_group_media_idx" ON "proj_blocks_hero" USING btree ("media_group_media_id");
  CREATE INDEX "proj_blocks_hero_grid_grid_items_card_titles_subtitles_order_idx" ON "proj_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_order");
  CREATE INDEX "proj_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_idx" ON "proj_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_hero_grid_grid_items_order_idx" ON "proj_blocks_hero_grid_grid_items" USING btree ("_order");
  CREATE INDEX "proj_blocks_hero_grid_grid_items_parent_id_idx" ON "proj_blocks_hero_grid_grid_items" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_hero_grid_grid_items_media_idx" ON "proj_blocks_hero_grid_grid_items" USING btree ("media_id");
  CREATE INDEX "proj_blocks_hero_grid_order_idx" ON "proj_blocks_hero_grid" USING btree ("_order");
  CREATE INDEX "proj_blocks_hero_grid_parent_id_idx" ON "proj_blocks_hero_grid" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_hero_grid_path_idx" ON "proj_blocks_hero_grid" USING btree ("_path");
  CREATE INDEX "proj_blocks_sponsors_sponsor_items_order_idx" ON "proj_blocks_sponsors_sponsor_items" USING btree ("_order");
  CREATE INDEX "proj_blocks_sponsors_sponsor_items_parent_id_idx" ON "proj_blocks_sponsors_sponsor_items" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_sponsors_sponsor_items_sponsor_group_sponsor_group_sponsor_media_idx" ON "proj_blocks_sponsors_sponsor_items" USING btree ("sponsor_group_sponsor_media_id");
  CREATE INDEX "proj_blocks_sponsors_order_idx" ON "proj_blocks_sponsors" USING btree ("_order");
  CREATE INDEX "proj_blocks_sponsors_parent_id_idx" ON "proj_blocks_sponsors" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_sponsors_path_idx" ON "proj_blocks_sponsors" USING btree ("_path");
  CREATE INDEX "proj_blocks_ticker_ticker_items_order_idx" ON "proj_blocks_ticker_ticker_items" USING btree ("_order");
  CREATE INDEX "proj_blocks_ticker_ticker_items_parent_id_idx" ON "proj_blocks_ticker_ticker_items" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_ticker_order_idx" ON "proj_blocks_ticker" USING btree ("_order");
  CREATE INDEX "proj_blocks_ticker_parent_id_idx" ON "proj_blocks_ticker" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_ticker_path_idx" ON "proj_blocks_ticker" USING btree ("_path");
  CREATE INDEX "proj_blocks_team_list_items_order_idx" ON "proj_blocks_team_list_items" USING btree ("_order");
  CREATE INDEX "proj_blocks_team_list_items_parent_id_idx" ON "proj_blocks_team_list_items" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_team_list_items_media_group_media_group_media_idx" ON "proj_blocks_team_list_items" USING btree ("media_group_media_id");
  CREATE INDEX "proj_blocks_team_list_order_idx" ON "proj_blocks_team_list" USING btree ("_order");
  CREATE INDEX "proj_blocks_team_list_parent_id_idx" ON "proj_blocks_team_list" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_team_list_path_idx" ON "proj_blocks_team_list" USING btree ("_path");
  CREATE INDEX "proj_blocks_content_header_links_order_idx" ON "proj_blocks_content_header_links" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_header_links_parent_id_idx" ON "proj_blocks_content_header_links" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_header_order_idx" ON "proj_blocks_content_header" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_header_parent_id_idx" ON "proj_blocks_content_header" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_header_path_idx" ON "proj_blocks_content_header" USING btree ("_path");
  CREATE INDEX "proj_blocks_content_header_media_group_media_group_media_idx" ON "proj_blocks_content_header" USING btree ("media_group_media_id");
  CREATE INDEX "proj_blocks_content_header_large_media_links_order_idx" ON "proj_blocks_content_header_large_media_links" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_header_large_media_links_parent_id_idx" ON "proj_blocks_content_header_large_media_links" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_header_large_media_order_idx" ON "proj_blocks_content_header_large_media" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_header_large_media_parent_id_idx" ON "proj_blocks_content_header_large_media" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_header_large_media_path_idx" ON "proj_blocks_content_header_large_media" USING btree ("_path");
  CREATE INDEX "proj_blocks_content_header_large_media_media_group_media_group_media_idx" ON "proj_blocks_content_header_large_media" USING btree ("media_group_media_id");
  CREATE INDEX "proj_blocks_content_text_links_order_idx" ON "proj_blocks_content_text_links" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_text_links_parent_id_idx" ON "proj_blocks_content_text_links" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_text_order_idx" ON "proj_blocks_content_text" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_text_parent_id_idx" ON "proj_blocks_content_text" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_text_path_idx" ON "proj_blocks_content_text" USING btree ("_path");
  CREATE INDEX "proj_blocks_content_text_media_images_order_idx" ON "proj_blocks_content_text_media_images" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_text_media_images_parent_id_idx" ON "proj_blocks_content_text_media_images" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_text_media_images_media_idx" ON "proj_blocks_content_text_media_images" USING btree ("media_id");
  CREATE INDEX "proj_blocks_content_text_media_links_order_idx" ON "proj_blocks_content_text_media_links" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_text_media_links_parent_id_idx" ON "proj_blocks_content_text_media_links" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_text_media_order_idx" ON "proj_blocks_content_text_media" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_text_media_parent_id_idx" ON "proj_blocks_content_text_media" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_text_media_path_idx" ON "proj_blocks_content_text_media" USING btree ("_path");
  CREATE INDEX "proj_blocks_content_quote_quote_columns_order_idx" ON "proj_blocks_content_quote_quote_columns" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_quote_quote_columns_parent_id_idx" ON "proj_blocks_content_quote_quote_columns" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_quote_order_idx" ON "proj_blocks_content_quote" USING btree ("_order");
  CREATE INDEX "proj_blocks_content_quote_parent_id_idx" ON "proj_blocks_content_quote" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_content_quote_path_idx" ON "proj_blocks_content_quote" USING btree ("_path");
  CREATE INDEX "proj_blocks_card_grid_card_items_grid_titles_subtitles_order_idx" ON "proj_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_order");
  CREATE INDEX "proj_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_idx" ON "proj_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_card_grid_card_items_order_idx" ON "proj_blocks_card_grid_card_items" USING btree ("_order");
  CREATE INDEX "proj_blocks_card_grid_card_items_parent_id_idx" ON "proj_blocks_card_grid_card_items" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_card_grid_order_idx" ON "proj_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "proj_blocks_card_grid_parent_id_idx" ON "proj_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_card_grid_path_idx" ON "proj_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "proj_blocks_image_grid_images_order_idx" ON "proj_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "proj_blocks_image_grid_images_parent_id_idx" ON "proj_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_image_grid_images_media_idx" ON "proj_blocks_image_grid_images" USING btree ("media_id");
  CREATE INDEX "proj_blocks_image_grid_order_idx" ON "proj_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "proj_blocks_image_grid_parent_id_idx" ON "proj_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "proj_blocks_image_grid_path_idx" ON "proj_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "proj_meta_meta_image_idx" ON "proj" USING btree ("meta_image_id");
  CREATE INDEX "proj_slug_idx" ON "proj" USING btree ("slug");
  CREATE INDEX "proj_updated_at_idx" ON "proj" USING btree ("updated_at");
  CREATE INDEX "proj_created_at_idx" ON "proj" USING btree ("created_at");
  CREATE INDEX "proj__status_idx" ON "proj" USING btree ("_status");
  CREATE INDEX "proj_rels_order_idx" ON "proj_rels" USING btree ("order");
  CREATE INDEX "proj_rels_parent_idx" ON "proj_rels" USING btree ("parent_id");
  CREATE INDEX "proj_rels_path_idx" ON "proj_rels" USING btree ("path");
  CREATE INDEX "proj_rels_pages_id_idx" ON "proj_rels" USING btree ("pages_id");
  CREATE INDEX "proj_rels_proj_id_idx" ON "proj_rels" USING btree ("proj_id");
  CREATE INDEX "_proj_v_blocks_column_columns_order_idx" ON "_proj_v_blocks_column_columns" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_column_columns_parent_id_idx" ON "_proj_v_blocks_column_columns" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_column_order_idx" ON "_proj_v_blocks_column" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_column_parent_id_idx" ON "_proj_v_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_column_path_idx" ON "_proj_v_blocks_column" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_hero_links_order_idx" ON "_proj_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_hero_links_parent_id_idx" ON "_proj_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_hero_order_idx" ON "_proj_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_hero_parent_id_idx" ON "_proj_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_hero_path_idx" ON "_proj_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_hero_media_group_media_group_media_idx" ON "_proj_v_blocks_hero" USING btree ("media_group_media_id");
  CREATE INDEX "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles_order_idx" ON "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles_parent_id_idx" ON "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_hero_grid_grid_items_order_idx" ON "_proj_v_blocks_hero_grid_grid_items" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_hero_grid_grid_items_parent_id_idx" ON "_proj_v_blocks_hero_grid_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_hero_grid_grid_items_media_idx" ON "_proj_v_blocks_hero_grid_grid_items" USING btree ("media_id");
  CREATE INDEX "_proj_v_blocks_hero_grid_order_idx" ON "_proj_v_blocks_hero_grid" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_hero_grid_parent_id_idx" ON "_proj_v_blocks_hero_grid" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_hero_grid_path_idx" ON "_proj_v_blocks_hero_grid" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_sponsors_sponsor_items_order_idx" ON "_proj_v_blocks_sponsors_sponsor_items" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_sponsors_sponsor_items_parent_id_idx" ON "_proj_v_blocks_sponsors_sponsor_items" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_sponsors_sponsor_items_sponsor_group_sponsor_group_sponsor_media_idx" ON "_proj_v_blocks_sponsors_sponsor_items" USING btree ("sponsor_group_sponsor_media_id");
  CREATE INDEX "_proj_v_blocks_sponsors_order_idx" ON "_proj_v_blocks_sponsors" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_sponsors_parent_id_idx" ON "_proj_v_blocks_sponsors" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_sponsors_path_idx" ON "_proj_v_blocks_sponsors" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_ticker_ticker_items_order_idx" ON "_proj_v_blocks_ticker_ticker_items" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_ticker_ticker_items_parent_id_idx" ON "_proj_v_blocks_ticker_ticker_items" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_ticker_order_idx" ON "_proj_v_blocks_ticker" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_ticker_parent_id_idx" ON "_proj_v_blocks_ticker" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_ticker_path_idx" ON "_proj_v_blocks_ticker" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_team_list_items_order_idx" ON "_proj_v_blocks_team_list_items" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_team_list_items_parent_id_idx" ON "_proj_v_blocks_team_list_items" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_team_list_items_media_group_media_group_media_idx" ON "_proj_v_blocks_team_list_items" USING btree ("media_group_media_id");
  CREATE INDEX "_proj_v_blocks_team_list_order_idx" ON "_proj_v_blocks_team_list" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_team_list_parent_id_idx" ON "_proj_v_blocks_team_list" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_team_list_path_idx" ON "_proj_v_blocks_team_list" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_content_header_links_order_idx" ON "_proj_v_blocks_content_header_links" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_header_links_parent_id_idx" ON "_proj_v_blocks_content_header_links" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_header_order_idx" ON "_proj_v_blocks_content_header" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_header_parent_id_idx" ON "_proj_v_blocks_content_header" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_header_path_idx" ON "_proj_v_blocks_content_header" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_content_header_media_group_media_group_media_idx" ON "_proj_v_blocks_content_header" USING btree ("media_group_media_id");
  CREATE INDEX "_proj_v_blocks_content_header_large_media_links_order_idx" ON "_proj_v_blocks_content_header_large_media_links" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_header_large_media_links_parent_id_idx" ON "_proj_v_blocks_content_header_large_media_links" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_header_large_media_order_idx" ON "_proj_v_blocks_content_header_large_media" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_header_large_media_parent_id_idx" ON "_proj_v_blocks_content_header_large_media" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_header_large_media_path_idx" ON "_proj_v_blocks_content_header_large_media" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_content_header_large_media_media_group_media_group_media_idx" ON "_proj_v_blocks_content_header_large_media" USING btree ("media_group_media_id");
  CREATE INDEX "_proj_v_blocks_content_text_links_order_idx" ON "_proj_v_blocks_content_text_links" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_text_links_parent_id_idx" ON "_proj_v_blocks_content_text_links" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_text_order_idx" ON "_proj_v_blocks_content_text" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_text_parent_id_idx" ON "_proj_v_blocks_content_text" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_text_path_idx" ON "_proj_v_blocks_content_text" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_content_text_media_images_order_idx" ON "_proj_v_blocks_content_text_media_images" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_text_media_images_parent_id_idx" ON "_proj_v_blocks_content_text_media_images" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_text_media_images_media_idx" ON "_proj_v_blocks_content_text_media_images" USING btree ("media_id");
  CREATE INDEX "_proj_v_blocks_content_text_media_links_order_idx" ON "_proj_v_blocks_content_text_media_links" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_text_media_links_parent_id_idx" ON "_proj_v_blocks_content_text_media_links" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_text_media_order_idx" ON "_proj_v_blocks_content_text_media" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_text_media_parent_id_idx" ON "_proj_v_blocks_content_text_media" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_text_media_path_idx" ON "_proj_v_blocks_content_text_media" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_content_quote_quote_columns_order_idx" ON "_proj_v_blocks_content_quote_quote_columns" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_quote_quote_columns_parent_id_idx" ON "_proj_v_blocks_content_quote_quote_columns" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_quote_order_idx" ON "_proj_v_blocks_content_quote" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_content_quote_parent_id_idx" ON "_proj_v_blocks_content_quote" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_content_quote_path_idx" ON "_proj_v_blocks_content_quote" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles_order_idx" ON "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles_parent_id_idx" ON "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_card_grid_card_items_order_idx" ON "_proj_v_blocks_card_grid_card_items" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_card_grid_card_items_parent_id_idx" ON "_proj_v_blocks_card_grid_card_items" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_card_grid_order_idx" ON "_proj_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_card_grid_parent_id_idx" ON "_proj_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_card_grid_path_idx" ON "_proj_v_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "_proj_v_blocks_image_grid_images_order_idx" ON "_proj_v_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_image_grid_images_parent_id_idx" ON "_proj_v_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_image_grid_images_media_idx" ON "_proj_v_blocks_image_grid_images" USING btree ("media_id");
  CREATE INDEX "_proj_v_blocks_image_grid_order_idx" ON "_proj_v_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "_proj_v_blocks_image_grid_parent_id_idx" ON "_proj_v_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "_proj_v_blocks_image_grid_path_idx" ON "_proj_v_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "_proj_v_parent_idx" ON "_proj_v" USING btree ("parent_id");
  CREATE INDEX "_proj_v_version_meta_version_meta_image_idx" ON "_proj_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_proj_v_version_version_slug_idx" ON "_proj_v" USING btree ("version_slug");
  CREATE INDEX "_proj_v_version_version_updated_at_idx" ON "_proj_v" USING btree ("version_updated_at");
  CREATE INDEX "_proj_v_version_version_created_at_idx" ON "_proj_v" USING btree ("version_created_at");
  CREATE INDEX "_proj_v_version_version__status_idx" ON "_proj_v" USING btree ("version__status");
  CREATE INDEX "_proj_v_created_at_idx" ON "_proj_v" USING btree ("created_at");
  CREATE INDEX "_proj_v_updated_at_idx" ON "_proj_v" USING btree ("updated_at");
  CREATE INDEX "_proj_v_latest_idx" ON "_proj_v" USING btree ("latest");
  CREATE INDEX "_proj_v_autosave_idx" ON "_proj_v" USING btree ("autosave");
  CREATE INDEX "_proj_v_rels_order_idx" ON "_proj_v_rels" USING btree ("order");
  CREATE INDEX "_proj_v_rels_parent_idx" ON "_proj_v_rels" USING btree ("parent_id");
  CREATE INDEX "_proj_v_rels_path_idx" ON "_proj_v_rels" USING btree ("path");
  CREATE INDEX "_proj_v_rels_pages_id_idx" ON "_proj_v_rels" USING btree ("pages_id");
  CREATE INDEX "_proj_v_rels_proj_id_idx" ON "_proj_v_rels" USING btree ("proj_id");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_projects_fk" FOREIGN KEY ("proj_id") REFERENCES "public"."proj"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_proj_id_idx" ON "pages_rels" USING btree ("proj_id");
  CREATE INDEX "_pages_v_rels_proj_id_idx" ON "_pages_v_rels" USING btree ("proj_id");
  CREATE INDEX "redirects_rels_proj_id_idx" ON "redirects_rels" USING btree ("proj_id");
  CREATE INDEX "payload_locked_documents_rels_proj_id_idx" ON "payload_locked_documents_rels" USING btree ("proj_id");
  CREATE INDEX "header_rels_proj_id_idx" ON "header_rels" USING btree ("proj_id");
  ALTER TABLE "pages_blocks_hero_grid_grid_items" DROP COLUMN "card_titles_subtitle";
  ALTER TABLE "pages_rels" DROP COLUMN "projects_id";
  ALTER TABLE "_pages_v_blocks_hero_grid_grid_items" DROP COLUMN "card_titles_subtitle";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "projects_id";
  ALTER TABLE "redirects_rels" DROP COLUMN "projects_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "projects_id";
  ALTER TABLE "header_rels" DROP COLUMN "projects_id";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_spons_items_sponsor_group_link_type";
  DROP TYPE "public"."enum_pages_blocks_team_list_cta_group_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__spons_items_v_sponsor_group_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_team_list_cta_group_link_appearance";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_spons_items_sponsor_group_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_team_list_cta_group_link_appearance" AS ENUM('default');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__spons_items_v_sponsor_group_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_team_list_cta_group_link_appearance" AS ENUM('default');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "spons_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sponsor_group_sponsor_media_id" integer,
  	"sponsor_group_link_type" "enum_spons_items_sponsor_group_link_type" DEFAULT 'reference',
  	"sponsor_group_link_new_tab" boolean,
  	"sponsor_group_link_url" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_spons_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sponsor_group_sponsor_media_id" integer,
  	"sponsor_group_link_type" "enum__spons_items_v_sponsor_group_link_type" DEFAULT 'reference',
  	"sponsor_group_link_new_tab" boolean,
  	"sponsor_group_link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "projects_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_projects_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_projects_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"users_id" integer
  );
  
  ALTER TABLE "pages_blocks_column_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hero_grid_grid_items_card_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_sponsors_sponsor_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_header_large_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_header_large_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_text_media_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_text_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_text_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_quote_quote_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_quote" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_card_grid_card_items_grid_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_card_grid_card_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_card_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_grid_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_column_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_sponsors_sponsor_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_header_large_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_header_large_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_text_media_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_text_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_text_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_quote_quote_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_quote" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_card_grid_card_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_card_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_grid_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_column_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_hero_grid_grid_items_card_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_hero_grid_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_hero_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_sponsors_sponsor_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_sponsors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_ticker_ticker_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_ticker" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_team_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_team_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_header_large_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_header_large_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_text_media_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_text_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_text_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_quote_quote_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_content_quote" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_card_grid_card_items_grid_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_card_grid_card_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_card_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_image_grid_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_blocks_image_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proj_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_column_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_hero_grid_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_hero_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_sponsors_sponsor_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_sponsors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_ticker_ticker_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_ticker" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_team_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_team_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_header_large_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_header_large_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_text_media_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_text_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_text_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_quote_quote_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_content_quote" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_card_grid_card_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_card_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_image_grid_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_blocks_image_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_proj_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_column_columns" CASCADE;
  DROP TABLE "pages_blocks_column" CASCADE;
  DROP TABLE "pages_blocks_hero_grid_grid_items_card_titles_subtitles" CASCADE;
  DROP TABLE "pages_blocks_sponsors_sponsor_items" CASCADE;
  DROP TABLE "pages_blocks_content_header_links" CASCADE;
  DROP TABLE "pages_blocks_content_header" CASCADE;
  DROP TABLE "pages_blocks_content_header_large_media_links" CASCADE;
  DROP TABLE "pages_blocks_content_header_large_media" CASCADE;
  DROP TABLE "pages_blocks_content_text_links" CASCADE;
  DROP TABLE "pages_blocks_content_text" CASCADE;
  DROP TABLE "pages_blocks_content_text_media_images" CASCADE;
  DROP TABLE "pages_blocks_content_text_media_links" CASCADE;
  DROP TABLE "pages_blocks_content_text_media" CASCADE;
  DROP TABLE "pages_blocks_content_quote_quote_columns" CASCADE;
  DROP TABLE "pages_blocks_content_quote" CASCADE;
  DROP TABLE "pages_blocks_card_grid_card_items_grid_titles_subtitles" CASCADE;
  DROP TABLE "pages_blocks_card_grid_card_items" CASCADE;
  DROP TABLE "pages_blocks_card_grid" CASCADE;
  DROP TABLE "pages_blocks_image_grid_images" CASCADE;
  DROP TABLE "pages_blocks_image_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_column_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_column" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_grid_grid_items_card_titles_subtitles" CASCADE;
  DROP TABLE "_pages_v_blocks_sponsors_sponsor_items" CASCADE;
  DROP TABLE "_pages_v_blocks_content_header_links" CASCADE;
  DROP TABLE "_pages_v_blocks_content_header" CASCADE;
  DROP TABLE "_pages_v_blocks_content_header_large_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_content_header_large_media" CASCADE;
  DROP TABLE "_pages_v_blocks_content_text_links" CASCADE;
  DROP TABLE "_pages_v_blocks_content_text" CASCADE;
  DROP TABLE "_pages_v_blocks_content_text_media_images" CASCADE;
  DROP TABLE "_pages_v_blocks_content_text_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_content_text_media" CASCADE;
  DROP TABLE "_pages_v_blocks_content_quote_quote_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content_quote" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid_card_items_grid_titles_subtitles" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid_card_items" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_image_grid_images" CASCADE;
  DROP TABLE "_pages_v_blocks_image_grid" CASCADE;
  DROP TABLE "proj_blocks_column_columns" CASCADE;
  DROP TABLE "proj_blocks_column" CASCADE;
  DROP TABLE "proj_blocks_hero_links" CASCADE;
  DROP TABLE "proj_blocks_hero" CASCADE;
  DROP TABLE "proj_blocks_hero_grid_grid_items_card_titles_subtitles" CASCADE;
  DROP TABLE "proj_blocks_hero_grid_grid_items" CASCADE;
  DROP TABLE "proj_blocks_hero_grid" CASCADE;
  DROP TABLE "proj_blocks_sponsors_sponsor_items" CASCADE;
  DROP TABLE "proj_blocks_sponsors" CASCADE;
  DROP TABLE "proj_blocks_ticker_ticker_items" CASCADE;
  DROP TABLE "proj_blocks_ticker" CASCADE;
  DROP TABLE "proj_blocks_team_list_items" CASCADE;
  DROP TABLE "proj_blocks_team_list" CASCADE;
  DROP TABLE "proj_blocks_content_header_links" CASCADE;
  DROP TABLE "proj_blocks_content_header" CASCADE;
  DROP TABLE "proj_blocks_content_header_large_media_links" CASCADE;
  DROP TABLE "proj_blocks_content_header_large_media" CASCADE;
  DROP TABLE "proj_blocks_content_text_links" CASCADE;
  DROP TABLE "proj_blocks_content_text" CASCADE;
  DROP TABLE "proj_blocks_content_text_media_images" CASCADE;
  DROP TABLE "proj_blocks_content_text_media_links" CASCADE;
  DROP TABLE "proj_blocks_content_text_media" CASCADE;
  DROP TABLE "proj_blocks_content_quote_quote_columns" CASCADE;
  DROP TABLE "proj_blocks_content_quote" CASCADE;
  DROP TABLE "proj_blocks_card_grid_card_items_grid_titles_subtitles" CASCADE;
  DROP TABLE "proj_blocks_card_grid_card_items" CASCADE;
  DROP TABLE "proj_blocks_card_grid" CASCADE;
  DROP TABLE "proj_blocks_image_grid_images" CASCADE;
  DROP TABLE "proj_blocks_image_grid" CASCADE;
  DROP TABLE "proj" CASCADE;
  DROP TABLE "proj_rels" CASCADE;
  DROP TABLE "_proj_v_blocks_column_columns" CASCADE;
  DROP TABLE "_proj_v_blocks_column" CASCADE;
  DROP TABLE "_proj_v_blocks_hero_links" CASCADE;
  DROP TABLE "_proj_v_blocks_hero" CASCADE;
  DROP TABLE "_proj_v_blocks_hero_grid_grid_items_card_titles_subtitles" CASCADE;
  DROP TABLE "_proj_v_blocks_hero_grid_grid_items" CASCADE;
  DROP TABLE "_proj_v_blocks_hero_grid" CASCADE;
  DROP TABLE "_proj_v_blocks_sponsors_sponsor_items" CASCADE;
  DROP TABLE "_proj_v_blocks_sponsors" CASCADE;
  DROP TABLE "_proj_v_blocks_ticker_ticker_items" CASCADE;
  DROP TABLE "_proj_v_blocks_ticker" CASCADE;
  DROP TABLE "_proj_v_blocks_team_list_items" CASCADE;
  DROP TABLE "_proj_v_blocks_team_list" CASCADE;
  DROP TABLE "_proj_v_blocks_content_header_links" CASCADE;
  DROP TABLE "_proj_v_blocks_content_header" CASCADE;
  DROP TABLE "_proj_v_blocks_content_header_large_media_links" CASCADE;
  DROP TABLE "_proj_v_blocks_content_header_large_media" CASCADE;
  DROP TABLE "_proj_v_blocks_content_text_links" CASCADE;
  DROP TABLE "_proj_v_blocks_content_text" CASCADE;
  DROP TABLE "_proj_v_blocks_content_text_media_images" CASCADE;
  DROP TABLE "_proj_v_blocks_content_text_media_links" CASCADE;
  DROP TABLE "_proj_v_blocks_content_text_media" CASCADE;
  DROP TABLE "_proj_v_blocks_content_quote_quote_columns" CASCADE;
  DROP TABLE "_proj_v_blocks_content_quote" CASCADE;
  DROP TABLE "_proj_v_blocks_card_grid_card_items_grid_titles_subtitles" CASCADE;
  DROP TABLE "_proj_v_blocks_card_grid_card_items" CASCADE;
  DROP TABLE "_proj_v_blocks_card_grid" CASCADE;
  DROP TABLE "_proj_v_blocks_image_grid_images" CASCADE;
  DROP TABLE "_proj_v_blocks_image_grid" CASCADE;
  DROP TABLE "_proj_v" CASCADE;
  DROP TABLE "_proj_v_rels" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_projects_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_projects_fk";
  
  ALTER TABLE "redirects_rels" DROP CONSTRAINT "redirects_rels_projects_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_projects_fk";
  
  DROP INDEX "pages_rels_proj_id_idx";
  DROP INDEX "_pages_v_rels_proj_id_idx";
  DROP INDEX "redirects_rels_proj_id_idx";
  DROP INDEX "payload_locked_documents_rels_proj_id_idx";
  DROP INDEX "header_rels_proj_id_idx";
  ALTER TABLE "pages_blocks_hero_links" ALTER COLUMN "link_appearance" DROP DEFAULT;
  ALTER TABLE "pages_blocks_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_blocks_hero_links_link_appearance" USING "link_appearance"::text::"public"."enum_pages_blocks_hero_links_link_appearance";
  ALTER TABLE "pages_blocks_hero_links" ALTER COLUMN "link_appearance" SET DEFAULT 'default';
  ALTER TABLE "pages_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" DROP DEFAULT;
  ALTER TABLE "pages_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DATA TYPE "public"."enum_pages_blocks_team_list_cta_group_link_appearance" USING "cta_group_link_appearance"::text::"public"."enum_pages_blocks_team_list_cta_group_link_appearance";
  ALTER TABLE "pages_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_hero_links" ALTER COLUMN "link_appearance" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_blocks_hero_links_link_appearance" USING "link_appearance"::text::"public"."enum__pages_v_blocks_hero_links_link_appearance";
  ALTER TABLE "_pages_v_blocks_hero_links" ALTER COLUMN "link_appearance" SET DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DATA TYPE "public"."enum__pages_v_blocks_team_list_cta_group_link_appearance" USING "cta_group_link_appearance"::text::"public"."enum__pages_v_blocks_team_list_cta_group_link_appearance";
  ALTER TABLE "_pages_v_blocks_team_list" ALTER COLUMN "cta_group_link_appearance" SET DEFAULT 'default';
  ALTER TABLE "pages_blocks_hero_grid_grid_items" ADD COLUMN "card_titles_subtitle" varchar;
  ALTER TABLE "pages_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "_pages_v_blocks_hero_grid_grid_items" ADD COLUMN "card_titles_subtitle" varchar;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "redirects_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "spons_items" ADD CONSTRAINT "spons_items_sponsor_group_sponsor_media_id_media_id_fk" FOREIGN KEY ("sponsor_group_sponsor_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "spons_items" ADD CONSTRAINT "spons_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sponsors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_spons_items_v" ADD CONSTRAINT "_spons_items_v_sponsor_group_sponsor_media_id_media_id_fk" FOREIGN KEY ("sponsor_group_sponsor_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_spons_items_v" ADD CONSTRAINT "_spons_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_sponsors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_populated_authors" ADD CONSTRAINT "projects_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_populated_authors" ADD CONSTRAINT "_projects_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "spons_items_order_idx" ON "spons_items" USING btree ("_order");
  CREATE INDEX "spons_items_parent_id_idx" ON "spons_items" USING btree ("_parent_id");
  CREATE INDEX "spons_items_sponsor_group_sponsor_group_sponsor_media_idx" ON "spons_items" USING btree ("sponsor_group_sponsor_media_id");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_spons_items_v_order_idx" ON "_spons_items_v" USING btree ("_order");
  CREATE INDEX "_spons_items_v_parent_id_idx" ON "_spons_items_v" USING btree ("_parent_id");
  CREATE INDEX "_spons_items_v_sponsor_group_sponsor_group_sponsor_media_idx" ON "_spons_items_v" USING btree ("sponsor_group_sponsor_media_id");
  CREATE INDEX "projects_populated_authors_order_idx" ON "projects_populated_authors" USING btree ("_order");
  CREATE INDEX "projects_populated_authors_parent_id_idx" ON "projects_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "projects_hero_image_idx" ON "projects" USING btree ("hero_image_id");
  CREATE INDEX "projects_meta_meta_image_idx" ON "projects" USING btree ("meta_image_id");
  CREATE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_projects_id_idx" ON "projects_rels" USING btree ("projects_id");
  CREATE INDEX "projects_rels_users_id_idx" ON "projects_rels" USING btree ("users_id");
  CREATE INDEX "_projects_v_version_populated_authors_order_idx" ON "_projects_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_projects_v_version_populated_authors_parent_id_idx" ON "_projects_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_hero_image_idx" ON "_projects_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX "_projects_v_rels_order_idx" ON "_projects_v_rels" USING btree ("order");
  CREATE INDEX "_projects_v_rels_parent_idx" ON "_projects_v_rels" USING btree ("parent_id");
  CREATE INDEX "_projects_v_rels_path_idx" ON "_projects_v_rels" USING btree ("path");
  CREATE INDEX "_projects_v_rels_projects_id_idx" ON "_projects_v_rels" USING btree ("projects_id");
  CREATE INDEX "_projects_v_rels_users_id_idx" ON "_projects_v_rels" USING btree ("users_id");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  CREATE INDEX "redirects_rels_projects_id_idx" ON "redirects_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "header_rels_projects_id_idx" ON "header_rels" USING btree ("projects_id");
  ALTER TABLE "pages_rels" DROP COLUMN "proj_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "proj_id";
  ALTER TABLE "redirects_rels" DROP COLUMN "proj_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "proj_id";
  ALTER TABLE "header_rels" DROP COLUMN "proj_id";
  DROP TYPE "public"."enum_pages_blocks_column_columns_size";
  DROP TYPE "public"."link_appearance";
  DROP TYPE "public"."spons_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_header_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_header_media_group_media_rounded";
  DROP TYPE "public"."enum_pages_blocks_content_header_large_media_links_link_type";
  DROP TYPE "public"."media_mode";
  DROP TYPE "public"."enum_pages_blocks_content_text_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_text_layout";
  DROP TYPE "public"."enum_pages_blocks_content_text_media_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_text_media_layout";
  DROP TYPE "public"."enum_pages_blocks_content_quote_quote_type";
  DROP TYPE "public"."enum_pages_blocks_card_grid_card_items_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_column_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_header_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_header_media_group_media_rounded";
  DROP TYPE "public"."enum__pages_v_blocks_content_header_large_media_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_text_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_text_layout";
  DROP TYPE "public"."enum__pages_v_blocks_content_text_media_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_text_media_layout";
  DROP TYPE "public"."enum__pages_v_blocks_content_quote_quote_type";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_card_items_link_type";
  DROP TYPE "public"."enum_proj_blocks_column_columns_size";
  DROP TYPE "public"."enum_proj_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_proj_blocks_hero_media_group_media_rounded";
  DROP TYPE "public"."enum_proj_blocks_hero_grid_grid_items_link_type";
  DROP TYPE "public"."enum_proj_blocks_team_list_items_media_group_media_round";
  DROP TYPE "public"."enum_proj_blocks_team_list_items_person_group_link_type";
  DROP TYPE "public"."enum_proj_blocks_team_list_cta_group_link_type";
  DROP TYPE "public"."enum_proj_blocks_content_header_links_link_type";
  DROP TYPE "public"."enum_proj_blocks_content_header_media_group_media_rounded";
  DROP TYPE "public"."enum_proj_blocks_content_header_large_media_links_link_type";
  DROP TYPE "public"."enum_proj_blocks_content_text_links_link_type";
  DROP TYPE "public"."enum_proj_blocks_content_text_layout";
  DROP TYPE "public"."enum_proj_blocks_content_text_media_links_link_type";
  DROP TYPE "public"."enum_proj_blocks_content_text_media_layout";
  DROP TYPE "public"."enum_proj_blocks_content_quote_quote_type";
  DROP TYPE "public"."enum_proj_blocks_card_grid_card_items_link_type";
  DROP TYPE "public"."enum_proj_status";
  DROP TYPE "public"."enum__proj_v_blocks_column_columns_size";
  DROP TYPE "public"."enum__proj_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_hero_media_group_media_rounded";
  DROP TYPE "public"."enum__proj_v_blocks_hero_grid_grid_items_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_team_list_items_media_group_media_round";
  DROP TYPE "public"."enum__proj_v_blocks_team_list_items_person_group_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_team_list_cta_group_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_content_header_links_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_content_header_media_group_media_rounded";
  DROP TYPE "public"."enum__proj_v_blocks_content_header_large_media_links_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_content_text_links_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_content_text_layout";
  DROP TYPE "public"."enum__proj_v_blocks_content_text_media_links_link_type";
  DROP TYPE "public"."enum__proj_v_blocks_content_text_media_layout";
  DROP TYPE "public"."enum__proj_v_blocks_content_quote_quote_type";
  DROP TYPE "public"."enum__proj_v_blocks_card_grid_card_items_link_type";
  DROP TYPE "public"."enum__proj_v_version_status";`)
}
