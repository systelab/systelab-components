# image-viewer

Component to display and manipulate images.

Over the image the component displays a top bar with some buttons that enable the different manipulation tools available.

## Using the template

```html
    <systelab-image-viewer
        [imageSrc]="imageSrc"
        [imageTitle]="imageDescription"
        [overlayText]="overlayText"
        [actionButtons]="actionButtons"
        [imageFilters]="imageFilters"        
        [showZoomByAreaButton]="true"
        [showAdjustButton]="true"
        [showZoomScale]="true"
        (clickActionButton)="doClickActionButton($event)"
        (clickOverlayText)="doClickOverlayText()"
    </systelab-image-viewer>
```

## Properties

The properties for the image-viewer are:

| Name                 |      Type      | Default | Description                               |
|----------------------|:--------------:|:-------:|-------------------------------------------|
| imageSrc             |     string     |         | Specifies the path to the image           |
| imageDescription     |     string     |         | Specifies an alternate text for the image |
| overlayText          |     string     |         | Text to be displayed overlaying the image |
| actionButtons        | ActionButton[] |         | Custom buttons and callback actions       |
| imageFilters         |     string     |         | Html defining custom SVG filters          |
| sliderZoomMax        |     number     |   200   | Specifies the maximum allowed zoom        |
| showZoomByAreaButton |    boolean     |  false  | Show zoom by area button                  |
| showAdjustButton     |    boolean     |  false  | Show adjust button                        |
| showZoomScale        |    boolean     |  false  | Show zoom scale below the slider          |
| showSliderToolTip    |    boolean     |  false  | Show zoom factor tooltip on the slider    |

## Events

| Name               |        Parameters         | Description                                           |
|--------------------|:-------------------------:|-------------------------------------------------------|
| clickActionButton  | event with the action key | Emits an event everytime an action button is clicked. |
| clickOverlayText   |                           | Emits an event everytime the overlay text is clicked. |

## Standard buttons for basic image manipulation

The standard buttons that can be displayed optionally are:

- Button for downloading the image
- Toggle Button for enable/disable the zoom by area tool
- Button to reset the image to its initial size (fills all the available space in the container)

Next to the standard buttons, a range slider allows to control the zoom factor of the image.
Bellow this slider, a scale ruler can be displayed to indicate the current zoom factor.

## Defining action buttons

In addition to the standard buttons, the component accepts custom action buttons. The click on that buttons will emit
an event with the corresponding action. The parent component must implement the corresponding handler provided
 in the _(clickActionButton)_ event.

The _actionButtons_ input parameter must be an array of ActionButton, an interface defined in the image-viewer with the following attributes:

| Name   |         Type          | Description                                                                |
|--------|:---------------------:|----------------------------------------------------------------------------|
| action |        string         | Key that identifies the action.                                            |
| label  |        string         | Label of the button.                                                       |
| type   | enum ActionButtonType | Type of the button: ActionButtonType.BUTTON, ActionButtonType.TOGGLEBUTTON |

## Applying SVG filters to the image

Through the _imageFilters_ property, the component accepts any type of SVG filter defined by the corresponding Html code.
These filters can then be applied to the image with a custom button where the key must match with the filter ID attribute.
For example, with the following code we provide two filters to 'colorize' the image in red and green based on changes colors based on a transformation matrix.

```html
public imageFilters = `
    <filter id="red">
        <feColorMatrix type="matrix"
                       values="1 0 0 0 0
                               0 0 0 0 0
                               0 0 0 0 0
                               0 0 0 1 0"/>
    </filter>
    <filter id="green">
        <feColorMatrix type="matrix"
                       values="0 0 0 0 0
                               0 1 0 0 0
                               0 0 0 0 0
                               0 0 0 1 0"/>
    </filter>`;
```

In order to apply these filters we will need also the corresponding custom action buttons:

```typescript
const actionButtons: Array<ActionButton> = [
    {action: 'green', label: 'Apply green', type: ActionButtonType.TOGGLE_BUTTON},
    {action: 'red', label: 'Apply red', type: ActionButtonType.TOGGLE_BUTTON}
];
```

Pay attention that the _action_ attribute of the buttons matches with the _id_ attribute of each filter.
This is only an example with colour filters using _feColorMatrix_, which allows the manipulation of each colour layer of the image according to its RGBA representation.

SVG filters are a powerful tool for image manipulation. From basic predefined filters (blur, brightness, contrast, etc.) to really complex filters that can be combined offering almost infinite possibilities.
Feel free to investigate and play around with them. Here you have some reference links about SVG filters:

[w3schools: CSS filter Property](https://www.w3schools.com/cssref/css3_pr_filter.asp)

[CSS { In Real Life }: Colour matrix filters](https://css-irl.info/into-the-matrix-with-svg-filters/)
