import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateProductAttributeDto {
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    inputType: 'select',
    enum: [
      'Size',
      'Shape',
      'Color',
      'Texture',
      'Weight',
      'Volume',
      'Density',
      'Composition',
      'Reactivity',
      'Stability',
      'Flammability',
      'Toxicity',
      'Strength',
      'Hardness',
      'Elasticity',
      'Ductility',
      'Brittleness',
      'Conductivity',
      'Resistivity',
      'Dielectric strength',
      'Thermal conductivity',
      'Specific heat capacity',
      'Melting point',
      'Boiling point',
      'Transparency',
      'Reflectivity',
      'Refractive index',
      'Color appearance',
      'Compatibility with living tissues',
      'Biodegradability',
      'Toxicity to living organisms',
      'Eco-friendliness',
      'Recyclability',
      'Environmental impact',
      'Longevity',
      'Resistance to wear and tear',
      'Ease of manufacturing',
      'Cost-effectiveness in production',
    ],
    class: 'order-2 w-4/12 grow',
    example: 'Color',
  })
  key: string;
  @Property({
    type: 'string',
    maxLength: 100,
    inputType: 'text',
    class: 'order-2 w-4/12 grow',
    example: '787593827182',
  })
  value: string;

  @Property({ type: 'object', target: IDDto })
  product: IDDto;
}
