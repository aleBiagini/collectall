import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./MultipleSelectPlaceholder.css";
import { GetSet, GetSets } from "../../services/SetService";
import StandardImageList from "../StandardImageList/StandardImageList";
import { Card } from "../../models/Card";
import { ISet } from "../../models/ISet";
import { useEffect } from "react";

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
  const [listSet, setListSet] = React.useState<ISet[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetSets();
        setListSet(result);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, [])
  

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
                const selectedName = listSet.find((set) => set.id === value);
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
            {listSet.map((set) => (
              <MenuItem
                key={set.id}
                value={set.id}
                style={getStyles(set.name, personName, theme)}
              >
                {set.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <StandardImageList selectedValue={selectedValue}></StandardImageList>
    </>
  );
}
