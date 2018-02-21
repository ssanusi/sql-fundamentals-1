import { assert } from 'chai';
import { orderBy } from 'lodash';
import { suite, test } from 'mocha-typescript';
import './helpers/global-hooks';
import { getAllProducts } from '../src/data/products';
import { logger } from '../src/log';

@suite('EX04: "Products List" Query - Join tests')
class ProductsListJoinTest {
  @test(
    'getAllProducts() results must now include categoryname and suppliername columns'
  )
  public async allProductsColumnTest() {
    let firstPageResult = await getAllProducts();
    assert.containsAllKeys(firstPageResult[0], [
      'suppliername',
      'categoryname'
    ]);
    assert.ok((firstPageResult[0] as any).suppliername);
    assert.ok((firstPageResult[0] as any).categoryname);
  }
  @test(
    'getAllProducts({ filter: { inventory: "discontinued" } }) results must now include categoryname and suppliername columns'
  )
  public async discontinuedProductsColumnTest() {
    let firstPageResult = await getAllProducts({
      filter: { inventory: 'discontinued' }
    });
    assert.containsAllKeys(firstPageResult[0], [
      'suppliername',
      'categoryname'
    ]);
    assert.ok((firstPageResult[0] as any).suppliername);
    assert.ok((firstPageResult[0] as any).categoryname);
  }
  @test(
    'getAllProducts({ filter: { inventory: "needs-reorder" } }) results must now include categoryname and suppliername columns'
  )
  public async reorderableProductsColumnTest() {
    let firstPageResult = await getAllProducts({
      filter: { inventory: 'needs-reorder' }
    });
    assert.containsAllKeys(firstPageResult[0], [
      'suppliername',
      'categoryname'
    ]);
    assert.ok((firstPageResult[0] as any).suppliername);
    assert.ok((firstPageResult[0] as any).categoryname);
  }
}