import { MdPerson as icon } from 'react-icons/md'

export default {
    name: 'person',
    title: 'Slicemasters',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'tell us a bit about this person'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
