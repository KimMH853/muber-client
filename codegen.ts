import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: ['http://localhost:4000/graphql'],
    documents: ['src/**/!(apollo).ts'],
    generates: {
        'src/types/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
        },
    },

    ignoreNoDocuments: true,
};

export default config;
