export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'BitMC Utils',
      description: 'Some useful tools for BitMC',
      // ogImage: '/hero.png',
      ogImageComponent: 'ShadcnDocs',
      ogImageColor: 'dark',
      // umami: {
      //   enable: true,
      //   src: 'https://cloud.umami.is/script.js',
      //   dataWebsiteId: '84a0f615-731d-4804-a2b6-1c67ea44f228',
      // },
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    banner: {
      enable: false,
      showClose: true,
      content: 'Welcome to **shadcn-docs-nuxt**',
      to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      target: '_blank',
      border: true,
    },
    header: {
      title: 'BitMC Utils',
      showTitle: true,
      logo: {
        light: '/bit-mc-logo-dark.svg',
        dark: '/bit-mc-logo-light.svg',
      },
      darkModeToggle: true,
      nav: [
        {
          title: 'Utils',
          links: [
            {
              title: 'Getting Started',
              to: '/utils/prose',
              description: 'Start use this utils online.',
            },
          ],
        },
        {
          title: 'Credits',
          links: [
            {
              title: 'shadcn-vue',
              to: 'https://www.shadcn-vue.com/',
              description: 'For the vue port of shadcn-ui & some docs component source',
              target: '_blank',
            },
            {
              title: 'shadcn-docs-nuxt',
              to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
              description: 'For the beautifully crafted Nuxt documentation site.',
              target: '_blank',
            },
          ],
        },
      ],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/Whbbit1999/bitmc-utils',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'group',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      // editLink: {
      //   enable: true,
      //   pattern: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/edit/main/content/:path',
      //   text: 'Edit this page',
      //   icon: 'lucide:square-pen',
      //   placement: ['docsFooter', 'toc'],
      // },
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      credits: 'Made with ❤️ by [**Whbbit1999**](https://github.com/Whbbit1999)',
      links: [
        {
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/Whbbit1999/bitmc-utils',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/Whbbit1999/bitmc-utils',
        target: '_blank',
        showLinkIcon: true,
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/Whbbit1999/bitmc-utils/issues',
        target: '_blank',
        showLinkIcon: true,
      }],
      // carbonAds: {
      //   enable: true,
      //   disableInDev: true,
      //   code: 'CW7ITKJN',
      //   placement: 'shadcn-docs-nuxtvercelapp',
      //   format: 'cover',
      // },
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});