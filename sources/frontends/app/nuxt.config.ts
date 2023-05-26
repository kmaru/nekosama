// https://nuxt.com/docs/api/configuration/nuxt-config

// https://stackoverflow.com/questions/76273467/nitro-overwrites-staticwebapp-config-json-when-presetazure
import fs from 'fs/promises'
import merge from "deepmerge";

export default defineNuxtConfig({
    nitro: {
        preset: 'azure'
    },
    hooks: {
        'close': async () => {
            const sourceText = await fs.readFile('./staticwebapp.config.json', 'utf8');
            const selfText  = await fs.readFile('./self_staticwebapp.config.json', 'utf8');
            const source = {}; //JSON.parse(sourceText);
            const self = JSON.parse(selfText);
            const merged = merge(source, self);
            await fs.writeFile('./staticwebapp.config.json', JSON.stringify(merged, null, 2));
        }
    }
})
