import { expect } from 'chai';
import paginations from '../utils/paginations';

test('Pagination should be a funcition', () => {
  expect(paginations).to.be.a('function');
});

test('Pagination({ total: 1, activePage: 1}) should return [1]', () => {
  const params = { total: 1, activePage: 1 };
  const result = [1];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 2, activePage: 1}) should return [1, 2]', () => {
  const params = { total: 2, activePage: 1 };
  const result = [1, 2];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 5, activePage: 1}) should return [1, 2, 3, 4, 5]', () => {
  const params = { total: 5, activePage: 1 };
  const result = [1, 2, 3, 4, 5];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 6, activePage: 1}) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 1 };
  const result = [1, 2, 3, `...`, 6];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 6, activePage: 2}) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 2 };
  const result = [1, 2, 3, `...`, 6];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 6, activePage: 3}) should return [1, 2, 3, 4, 5, 6]', () => {
  const params = { total: 6, activePage: 3 };
  const result = [1, 2, 3, 4, 5, 6];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 6, activePage: 4}) should return [1, 2, 3, 4, 5, 6]', () => {
  const params = { total: 6, activePage: 4 };
  const result = [1, 2, 3, 4, 5, 6];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 6, activePage: 5}) should return [1, "..." , 4, 5, 6]', () => {
  const params = { total: 6, activePage: 5 };
  const result = [1, `...`, 4, 5, 6];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 6, activePage: 6}) should return [1, "...", 4,  5, 6]', () => {
  const params = { total: 6, activePage: 6 };
  const result = [1, `...`, 4, 5, 6];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 7, activePage: 1}) should return [1, 2, 3, "...", 7]', () => {
  const params = { total: 7, activePage: 1 };
  const result = [1, 2, 3, `...`, 7];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 7, activePage: 3}) should return [1, 2, 3, 4, "...", 7]', () => {
  const params = { total: 7, activePage: 3 };
  const result = [1, 2, 3, 4, `...`, 7];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 7, activePage: 4}) should return [1, 2, 3, 4, 5, 6, 7]', () => {
  const params = { total: 7, activePage: 4 };
  const result = [1, 2, 3, 4, 5, 6, 7];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 7, activePage: 5}) should return [1, "..." , 4, 5, 6, 7]', () => {
  const params = { total: 7, activePage: 5 };
  const result = [1, `...`, 4, 5, 6, 7];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 7, activePage: 6}) should return [1, "...", 5, 6, 7]', () => {
  const params = { total: 7, activePage: 6 };
  const result = [1, `...`, 5, 6, 7];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 7, activePage: 7}) should return [1, "...", 5, 6, 7]', () => {
  const params = { total: 7, activePage: 7 };
  const result = [1, `...`, 5, 6, 7];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 15, activePage: 8}) should return [1, "...",7, 8, 9, "...", 15]', () => {
  const params = { total: 15, activePage: 8 };
  const result = [1, `...`, 7, 8, 9, `...`, 15];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 15 }) should return [1, 2, 3, "...", 15]', () => {
  const params = { total: 15 };
  const result = [1, 2, 3, `...`, 15];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({ total: 15 }) should return [1, 2, 3, "...", 15]', () => {
  const params = { total: 15 };
  const result = [1, 2, 3, `...`, 15];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination({}) should return [1]', () => {
  const params = {};
  const result = [1];
  expect(paginations(params)).to.be.deep.equal(result);
});

test('Pagination() should return [1]', () => {
  const result = [1];
  expect(paginations()).to.be.deep.equal(result);
});
