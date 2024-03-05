import React from "react";
import { inject, observer } from "mobx-react";
import positionStore from "/store/positionStore";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";

const Order = ({ positionStore }) => {
  return (
    <div>
      <Table basic="very" unstackable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Slno</TableHeaderCell>
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
          {positionStore.buys.map((orders, index) => (
            <TableRow key={index} verticalAlign="top">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{orders.script}</TableCell>
              <TableCell>{orders.sprice}</TableCell>
              <TableCell>{orders.cepe}</TableCell>
              <TableCell>{orders.bs}</TableCell>
              <TableCell>{orders.expdate}</TableCell>
              <TableCell>{orders.iv}</TableCell>
              <TableCell>{orders.price}</TableCell>
              <TableCell>CurrentPrice</TableCell>
              <TableCell>PROFIT</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default inject("positionStore")(observer(Order));
