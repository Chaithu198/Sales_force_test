import { LightningElement } from 'lwc';

export default class First_LWC extends LightningElement 
{
    Test LWC this[NavigationMixin.Navigate]({
        type: "standard__component",
        attributes: {
            componentName: "c__component name"
        }
    });
}