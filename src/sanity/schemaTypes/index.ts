import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './protuct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ productSchema ],
}
