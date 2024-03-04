import React from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";

const Order = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Script</TableHeaderCell>
            <TableHeaderCell>Stright Price</TableHeaderCell>
            <TableHeaderCell>Ce/Pe</TableHeaderCell>
            <TableHeaderCell>Buy/Sell</TableHeaderCell>
            <TableHeaderCell>Exp Date</TableHeaderCell>
            <TableHeaderCell>Iv</TableHeaderCell>
            <TableHeaderCell>Bought</TableHeaderCell>
            <TableHeaderCell>Current Price</TableHeaderCell>
            <TableHeaderCell>Profite</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow verticalAlign="top">
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Order;
