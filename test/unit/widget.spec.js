import {Widget} from '../../../src/widget';
import {Container} from 'aurelia-dependency-injection';
import {BehaviorInstance} from 'aurelia-templating';

describe('the Widget module', () => {
    var widget;

    beforeEach(() => {
        new Container().makeGlobal();
        widget = BehaviorInstance.createForUnitTest(Widget);
    });

    it('constructs with a name property', () => {
        expect(widget.name).toEqual('');
    });

    it('clears the name property when isOpen is set to true', done => {
        widget.name = 'Testing';
        widget.isOpen = true;
        setTimeout(() => {
            expect(widget.name).toEqual('');
            done();
        });
    });

    it('doesnt clear the name property when isOpen is set to false', done => {
        let testValue = 'Testing';
        widget.name = testValue;
        widget.isOpen = false;
        setTimeout(() => {
            expect(widget.name).toEqual(testValue);
            done();
        });
    });

    it('clears the name property when toggleOpen is clicked', done => {
       spyOn(widget, 'isOpenChanged');
       widget.name = 'testing';
       widget.toggleOpen();
       setTimeout(() => {
         expect(widget.isOpenChanged).toHaveBeenCalledWith(true, false);
         done();
       });
     });
});