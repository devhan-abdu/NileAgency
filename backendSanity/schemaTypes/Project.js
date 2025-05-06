export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'clientName',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Company Description',
        type: 'text',
      },
      {
        name: 'servicesProvided',
        title: 'Services Provided',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'timeline',
        title: 'Timeline to Finish',
        type: 'string',
      },
      {
        name: 'challenge',
        title: 'Challenge',
        type: 'text',
      },
      {
        name: 'solution',
        title: 'Our Approach / Solution',
        type: 'text',
      },
      {
        name: 'result',
        title: 'Result',
        type: 'text',
      },
      {
        name: 'testimonial',
        title: 'CEO Testimonial',
        type: 'object',
        fields: [
          {
            name: 'ceoName',
            title: 'CEO Name',
            type: 'string',
          },
          {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
          },
          {
            name: 'image',
            title: 'CEO Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'message',
            title: 'Message',
            type: 'text',
          },
        ],
      },
      {
        name: 'image',
        title: 'Project Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ]
  }
