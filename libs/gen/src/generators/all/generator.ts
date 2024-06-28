import { Tree } from '@nx/devkit';
import { AllGeneratorSchema } from './schema';
import modelGenerator from '../model/generator';
import entityGenerator from '../entity/generator';
import entityListGenerator from '../entity-list/generator';
import formGenerator from '../form/generator';
import formGroupGenerator from '../form-group/generator';
import ngrxConfigGenerator from '../ngrx-config/generator';
import ngrxGenerator from '../ngrx/generator';
import resourceGenerator from '../resource/generator';
import routesGenerator from '../routes/generator';

export async function allGenerator(tree: Tree, options: AllGeneratorSchema) {
  await entityGenerator(tree, options);
  await entityListGenerator(tree);
  await formGenerator(tree, options);
  await formGroupGenerator(tree, options);
  await modelGenerator(tree, options);
  await ngrxGenerator(tree);
  await ngrxConfigGenerator(tree);
  await resourceGenerator(tree, options);
  await routesGenerator(tree);
}

export default allGenerator;
