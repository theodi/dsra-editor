import React from 'react';
import { withJsonFormsArrayControlProps } from '@jsonforms/react';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomListWithDetailRenderer = (props) => {
  const { data, path, handleChange } = props;
  console.log(data); // Debugging to ensure data has the correct titles

  return (
    <List>
      {data.map((item, index) => (
        <ListItem
          key={index}
          button
          onClick={() => {
            console.log(`Clicked on item with title: ${item.title}`);
            handleChange(`${path}.${index}`, item);
          }}
        >
          <ListItemText primary={item.title || `Unknown`} />
        </ListItem>
      ))}
    </List>
  );
};

export default withJsonFormsArrayControlProps(CustomListWithDetailRenderer);
