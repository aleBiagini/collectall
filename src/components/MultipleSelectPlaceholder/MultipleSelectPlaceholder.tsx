import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./MultipleSelectPlaceholder.css";
import { GetSet } from "../../services/SetService";
import StandardImageList from "../StandardImageList/StandardImageList";
import { Card } from "../../models/Card";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  {
    key: 0,
    name: "Set Base",
    id: "base1"
  },
  {
    key: 1,
    name: "Jungle",
    id: "base2"
  },
  {
    key: 2,
    name: "Fossil",
    id: "base3"
  },
  {
    key: 3,
    name: "Base Set 2",
    id: "base4"
  },
  {
    key: 4,
    name: "Team Rocket",
    id: "base5"
  },
  {
    key: 5,
    name: "Legendary Collection",
    id: "base6"
  }
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<Card[]>([]);

  const handleChange = async (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    const result = await GetSet(value);
    setSelectedValue(result);
  };

  return (
    <>
      <div className="multiple-select-placeholder">
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }

              const selectedNames = selected.map((value) => {
                const selectedName = names.find((name) => name.id === value);
                return selectedName ? selectedName.name : value;
              });

              return selectedNames.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem
                key={name.key}
                value={name.id}
                style={getStyles(name.name, personName, theme)}
              >
                {name.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <StandardImageList selectedValue={selectedValue}></StandardImageList>
    </>
  );
}
