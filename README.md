
# install
    npm install react-native-ajui --save
    
## Components

1. [AJRadioButton](#ajradiobutton-component)
2. [AJCheckBox](#ajcheckbox-component)
3. [AJSingleSelection](#systemmessage-component)
4. [AJMultiSelection](#messagelist-component)
6. [AJSwitch](#input-component)
7. [AJToggleSwitch](#button-component)
8. [AJMutiDropDown](#popup-component)
9. [AJDropDown](#chatlist-component)


## AJRadioButton Component
Animated radio buttons component for react native
4 types animation when click on any items of radio button
# DEMO
------------------------------------------------------------
# Usage
    import {AJRadioButton} from 'react-native-ajui';
    const data = [
    { name: "Male", value: "male" }, 
    { name: "Female", value: "female" }, 
    { name: "Other", value: "other" }
    ]   
      <AJRadioButton
        data={data}
        OnSelectValue={(e) => console.log(e)}
      />

# Properties

| Prop  | Description | Default |
| ------------- | ------------- | ------------- |
| data  | radio buttons label array, you can use any data in object, label is necessary for showing in radio button | [] |
| selectedBtn  | callback when radio button clicked | - |
| icon  | you can use any icon for button, see the example | - |
| box  | box of for items  | true |
| initial  | The number of selected radio button. start from 1 for first item of array. This is used when this component is activated. | -1 |
| animationTypes  | the animations when click on item, Valid values: 'zoomIn', 'pulse', 'shake', 'rotate', you can use one or more of this value for exaple: ['pulse'] or ['pulse', 'rotate']  | [] |
| duration  | For how long the animation will run (milliseconds) | 500 |
| style  | style for all RadioButtonRN  | {} |
| boxStyle  | style for box  | {} |
| textStyle  | style for label text  | {} |
| circleSize  | circle size for unselected items and whitout icon selected size | 18 |
| activeColor  | color of active button and box border  | '#03a9f4' |
| deactiveColor  | color of deactive button  | '#e2e2e2' |
| boxActiveBgColor  | background color of active item, when box is true | '#e1f5fe33' |
| boxDeactiveBgColor  | background color of deactive items, when box is true  | '#fff' |
| textColor  | label color  | '#383838' |



## AJCheckBox Component
Animated radio buttons component for react native
4 types animation when click on any items of radio button
# DEMO
------------------------------------------------------------
# Usage
    import {AJRadioButton} from 'react-native-ajui';
    const data = [
    { name: "Male", value: "male" }, 
    { name: "Female", value: "female" }, 
    { name: "Other", value: "other" }
    ]   
      <AJRadioButton
        data={data}
        OnSelectValue={(e) => console.log(e)}
      />

# Properties

| Prop  | Description | Default |
| ------------- | ------------- | ------------- |
| data  | radio buttons label array, you can use any data in object, label is necessary for showing in radio button | [] |
| selectedBtn  | callback when radio button clicked | - |
| icon  | you can use any icon for button, see the example | - |
| box  | box of for items  | true |
| initial  | The number of selected radio button. start from 1 for first item of array. This is used when this component is activated. | -1 |
| animationTypes  | the animations when click on item, Valid values: 'zoomIn', 'pulse', 'shake', 'rotate', you can use one or more of this value for exaple: ['pulse'] or ['pulse', 'rotate']  | [] |
| duration  | For how long the animation will run (milliseconds) | 500 |
| style  | style for all RadioButtonRN  | {} |
| boxStyle  | style for box  | {} |
| textStyle  | style for label text  | {} |
| circleSize  | circle size for unselected items and whitout icon selected size | 18 |
| activeColor  | color of active button and box border  | '#03a9f4' |
| deactiveColor  | color of deactive button  | '#e2e2e2' |
| boxActiveBgColor  | background color of active item, when box is true | '#e1f5fe33' |
| boxDeactiveBgColor  | background color of deactive items, when box is true  | '#fff' |
| textColor  | label color  | '#383838' |
