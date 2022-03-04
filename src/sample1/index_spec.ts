import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('createFile', () => {
    it('works', async () => {
        const runner = new SchematicTestRunner('schematics', collectionPath);
        const tree = await runner
            .runSchematicAsync('createFile', {}, Tree.empty())
            .toPromise();
        expect(tree.files).toBeTruthy()
    });

    it('default file name is hello', async () => {
        const runner = new SchematicTestRunner('schematics', collectionPath);
        const tree = await runner
            .runSchematicAsync('createFile', {}, Tree.empty())
            .toPromise();
        expect(tree.files).toContain('/hello');
    });
});
