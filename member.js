function skillsMember() {
    return {
        title: 'Skills',
        description: 'Skills of a member',
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'The identifier of the member'
            },
            skills: {
                type: 'array',
                description: 'List of skills',
                items: {
                    type: 'string'
                }
            }
        }
    }
}