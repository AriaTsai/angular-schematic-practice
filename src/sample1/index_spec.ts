import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('sample1', () => {

    const expectResult = (fileName?: string) => {
        const filePath = `/${fileName || 'hello'}`
        const params = fileName ? { name: fileName } : {}
        const runner = new SchematicTestRunner('schematics', collectionPath);
        runner.runSchematicAsync('sample1', params, Tree.empty()).subscribe(tree => {
            expect(tree.files).toBeTruthy()
            expect(tree.files).toContain(filePath)
            expect(tree.readContent(filePath)).toContain('world')
        })
    }

    it('default file name is hello, content is world', () => {
        expectResult()
    });

    it('file name is aria, content is world', () => {
        expectResult('aria')
    });
});
