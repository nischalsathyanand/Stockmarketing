import React from "react";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import {
  FormField,
  Button,
  Dropdown,
  Form,
  Select,
  label,
  Icon,
  Modal,
  Input,
} from "semantic-ui-react";
import buyStore from "/store/BuyStore";
import positionStore from "/store/positionStore";
const Position = ({ handleStepClick }) => {
  const [price, setPrice] = useState("");
  const [iv, setIv] = useState("");
  const script = [
    { key: "tata", text: "tata", value: "tata" },
    { key: "microsoft", text: "microsoft", value: "microsoft" },
    { key: "reliance", text: "reliance", value: "reliance" },
    { key: "jio", text: "jio", value: "jio" },
  ];
  const sprice = [
    { key: "1", text: "25000", value: "25000" },
    { key: "2", text: "70000", value: "70000" },
    { key: "3", text: "30000", value: "30000" },
    { key: "4", text: "60000", value: "60000" },
  ];
  const cepe = [
    { key: "Ce", text: "Ce", value: "Ce" },
    { key: "Pe", text: "Pe", value: "Pe" },
  ];
  const bs = [
    { key: "Buy", text: "Buy", value: "Buy" },
    { key: "Sell", text: "Sell", value: "Sell" },
  ];
  const expdate = [
    { key: "22/10/2024", text: "22/10/2024", value: "22/10/2024" },
    { key: "22/10/2025", text: "22/10/2025", value: "22/10/2025" },
  ];

  const [formData, setformData] = useState({
    script: "",
    sprice: "",
    cepe: "",
    bs: "",
    expdate: "",
    price: "",
    iv: "",
  });
  const handleAddScript = () => {
    buyStore.orders.push({
      script: formData.script,
      sprice: formData.sprice,
      cepe: formData.cepe,
      bs: formData.bs,
      expdate: formData.expdate,
      price: formData.price,
      iv: formData.iv,
    });
    console.log(buyStore.orders);
    toggleOrderCount(buyStore.orders.length);
  };
  const [orderCount, setOrderCount] = useState(0);
  const toggleOrderCount = (count) => {
    setOrderCount(count);

    setformData({
      script: "",
      sprice: "",
      cepe: "",
      bs: "",
      expdate: "",
      price: "",
      iv: "",
    });
  };

  const handleSaveClick = () => {
    positionStore.buys.push(...buyStore.orders);
    buyStore.clearOrders();
    console.log(positionStore.buys);
    handleStepClick(0);
  };
  return (
    <Form fluid size="mini">
      <FormField>
        <label>Script</label>
        <Dropdown
          placeholder="Script"
          fluid
          selection
          options={script}
          value={formData.script}
          onChange={(e, { value }) =>
            setformData({ ...formData, script: value })
          }
        />
      </FormField>
      <FormField>
        <label>S price</label>
        <Dropdown
          placeholder="S Price"
          fluid
          selection
          options={sprice}
          value={formData.sprice}
          onChange={(e, { value }) =>
            setformData({ ...formData, sprice: value })
          }
        />
      </FormField>
      <FormField>
        <label>Ce/Pe</label>
        <Dropdown
          placeholder="ce/pe"
          fluid
          selection
          options={cepe}
          value={formData.cepe}
          onChange={(e, { value }) => setformData({ ...formData, cepe: value })}
        />
      </FormField>
      <FormField>
        <label>B/S</label>
        <Dropdown
          placeholder="Buy/Sell"
          fluid
          selection
          options={bs}
          value={formData.bs}
          onChange={(e, { value }) => setformData({ ...formData, bs: value })}
        />
      </FormField>
      <FormField>
        <label>Exp date</label>
        <Dropdown
          placeholder="expdate"
          fluid
          selection
          options={expdate}
          value={formData.expdate}
          onChange={(e, { value }) =>
            setformData({ ...formData, expdate: value })
          }
        />
      </FormField>
      <FormField>
        <label>Price</label>
        <Input
          value={formData.price}
          onChange={(e, { value }) =>
            setformData({ ...formData, price: value })
          }
        />
      </FormField>
      <FormField>
        <label>Iv</label>
        <Input
          value={formData.iv}
          onChange={(e, { value }) => setformData({ ...formData, iv: value })}
        />
      </FormField>
      <Button color="green" onClick={handleAddScript}>
        ADD MORE SCRIPT
      </Button>
      <Button color="red" onClick={handleSaveClick}>
        SAVE
      </Button>
    </Form>
  );
};
export default inject("buyStore", "positionStore")(observer(Position));
