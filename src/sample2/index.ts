import { apply, Rule, SchematicContext, Tree, url, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createComponent(_options: any): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        // const sourceTemplate = url('./class');
        const sourceTemplate = url('./files');
        const sourceParametrizedTemplates = apply(sourceTemplate, [
            template({
                ..._options,// 使用者所輸入的參數
                ...strings // 將這些函式加到規則裡，範本語法才能正常運作 /dasherize,underscore,classify,camelize,capitalize
            })
        ])

        return mergeWith(sourceParametrizedTemplates);
    };
}
