import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import destinationsOne from './destinationsOne'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, destinationsOne],
}
