import { boolean, integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl'),
    subscription:boolean('subscription').default(false),
    credits:integer('credits').default(3), 
})

export const VideoDataMain=pgTable('videoData2',{
    id:serial('id').primaryKey(),
    script:json('script').notNull(),
    audioFileUrl:varchar('audioFileUrl').notNull(),
    captions:json('captions').notNull(),
    imageList:varchar('imageList').array(),
    createdBy:varchar('createdBy').notNull(),
})