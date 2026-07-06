# AspectRatio

The `AspectRatio` primitive locks the dimensions of its children to a specific ratio (e.g., 16:9, 4:3, 1:1) while remaining fluid horizontally.

## Props
- `ratio`: A number representing `width / height`. For 16:9, pass `16/9`. Defaults to `1`.

## Usage
Wrap images or video players in this component to prevent Cumulative Layout Shift (CLS) as they load.
