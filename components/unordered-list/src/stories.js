import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from '@govuk-react/list-item';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import UnorderedList from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/UnorderedList', module);
const examples = storiesOf('Typography/UnorderedList/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <UnorderedList>
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </UnorderedList>
));

examples.add('UnorderedList with square', () => (
  <UnorderedList listStyleType="square">
    <ListItem>Cras nec quam ut lorem.</ListItem>
    <ListItem>Curabitur porta elit ut ante vehicula.</ListItem>
    <ListItem>Proin ac molestie ligula, non blandit libero.</ListItem>
  </UnorderedList>
));

examples.add(
  'UnorderedList with no decoration',
  () => (
    <UnorderedList listStyleType="none">
      <ListItem>In nisi lectus, mollis sed neque.</ListItem>
      <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
      <ListItem>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
      <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
    </UnorderedList>
  ),
);
