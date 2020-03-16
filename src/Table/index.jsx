import React from 'react';
import { VariableSizeGrid as WindowTable } from 'react-window';
import faker from 'faker';
import TableRow from '../TableRow';
import TableHeader from '../TableHeader';

const Table = () => {
  const rowCount = 1000;
  const columnCount = 5;
  const columns = ['id', 'firstName', 'lastName']
  const data = Array.from(Array(rowCount)).map((item, index) => [
    index + 1,
    faker.random.uuid(),
    faker.name.firstName(),
    faker.name.lastName(),
    faker.random.number(),
  ]);

  return (
    <div>
      <TableHeader columns={columns} />
      <WindowTable
        columnWidth={() => 200}
        rowHeight={() => 50}
        width={1000}
        height={500}
        columnCount={columnCount}
        rowCount={rowCount}
        itemData={data}
      >
        {TableRow}
      </WindowTable>
    </div>
  );
};

export default Table;
