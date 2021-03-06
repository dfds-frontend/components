import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

export default function FontsStory() {
  const Letters = ({ title, fontWeight = 400, fontStyle = 'normal' }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxæøå';
    return (
      <div style={{ fontWeight, fontStyle }}>
        <p>{title}</p>
        <p>{alphabet}</p>
        <p style={{ textTransform: 'uppercase' }}>{alphabet}</p>
      </div>
    );
  };

  storiesOf('Fonts', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Fonts

usage description here

## Something

      `)(() => (
        <div
          className=""
          style={{
            padding: '1rem',
            fontSize: '3.2rem',
            letterSpacing: '1rem',
            wordWrap: 'break-word',
          }}
        >
          <Letters title="DFDS Font regular" />
          <hr />

          <Letters title="DFDS Font light" fontWeight={300} />
          <hr />

          <Letters title="DFDS Font bold" fontWeight="bold" />
          <hr />

          <Letters title="DFDS Font italic" fontStyle="italic" />
        </div>
      ))
    );
}
