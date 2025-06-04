import { ControlValueAccessorBase } from './control-value-accessor-base';

const TEXT_NEW_VALUE = 'new value';
const TEXT_VALUE = 'value';
const TEXT_FIRST_VALUE = 'first';
const TEXT_SECOND_VALUE = 'second';
const TEXT_TEST_VALUE = 'test value';
const TEXT_TEST = 'test';
const TEXT_DIRECT_VALUE = 'direct value';

class TestValueAccessor extends ControlValueAccessorBase {}

describe('ControlValueAccessorBase', () => {
    let accessor: TestValueAccessor;

    beforeEach(() => {
        accessor = new TestValueAccessor();
    });

    // Test for initializing the value as undefined
    it('should initialize value as undefined', () => {
        expect(accessor.value).toBeUndefined();
    });

    // Test for verifying the default onTouched function
    it('should have a default onTouched function', () => {
        expect(() => accessor.onTouched()).not.toThrow();
    });

    // Test for updating the value and triggering onChange
    it('should update value and call onChange', () => {
        const onChangeSpy = jasmine.createSpy('onChange');
        accessor.registerOnChange(onChangeSpy);
        accessor.value = TEXT_NEW_VALUE;
        expect(accessor.value).toBe(TEXT_NEW_VALUE);
        expect(onChangeSpy).toHaveBeenCalledWith(TEXT_NEW_VALUE);
    });

    // Test for writing a value using writeValue
    it('should write a value with writeValue', () => {
        accessor.writeValue(TEXT_VALUE);
        expect(accessor.value).toBe(TEXT_VALUE);
    });

    // Test for overwriting a value using writeValue
    it('should overwrite value with writeValue', () => {
        accessor.value = TEXT_FIRST_VALUE;
        accessor.writeValue(TEXT_SECOND_VALUE);
        expect(accessor.value).toBe(TEXT_SECOND_VALUE);
    });

    // Test for updating the disabled state and verifying it
    it('should update disabled state and call setDisabledState', () => {
        accessor.disabled = true;
        expect(accessor.disabled).toBeTrue();
        accessor.disabled = false;
        expect(accessor.disabled).toBeFalse();
    });

    // Test for getting the initial disabled state
    it('should get disabled state', () => {
        expect(accessor.disabled).toBeFalse();
        accessor.setDisabledState(true);
        expect(accessor.disabled).toBeTrue();
    });

    // Test for directly calling setDisabledState
    it('should call setDisabledState directly', () => {
        accessor.setDisabledState(true);
        expect(accessor.disabled).toBeTrue();
        accessor.setDisabledState(false);
        expect(accessor.disabled).toBeFalse();
    });

    // Test for registering onTouched and verifying its call
    it('should register onTouched', () => {
        const onTouchedSpy = jasmine.createSpy('onTouched');
        accessor.registerOnTouched(onTouchedSpy);
        accessor.onTouched();
        expect(onTouchedSpy).toHaveBeenCalled();
    });

    // Test for registering onChange and verifying its call
    it('should register onChange', () => {
        const onChangeSpy = jasmine.createSpy('onChange');
        accessor.registerOnChange(onChangeSpy);
        accessor.value = TEXT_TEST_VALUE;
        expect(onChangeSpy).toHaveBeenCalledWith(TEXT_TEST_VALUE);
    });

    // Test for overwriting onChange and onTouched and verifying their calls
    it('should overwrite onChange and onTouched', () => {
        const onChangeSpy = jasmine.createSpy('onChange');
        const onTouchedSpy = jasmine.createSpy('onTouched');
        accessor.registerOnChange(onChangeSpy);
        accessor.registerOnTouched(onTouchedSpy);
        accessor.value = TEXT_TEST;
        accessor.onTouched();
        expect(onChangeSpy).toHaveBeenCalledWith(TEXT_TEST);
        expect(onTouchedSpy).toHaveBeenCalled();
    });

    // Test for directly calling onChange and onTouched
    it('should call onChange and onTouched directly', () => {
        const onChangeSpy = jasmine.createSpy('onChange');
        const onTouchedSpy = jasmine.createSpy('onTouched');
        accessor.onChange = onChangeSpy;
        accessor.onTouched = onTouchedSpy;

        accessor.onChange(TEXT_DIRECT_VALUE);
        accessor.onTouched();

        expect(onChangeSpy).toHaveBeenCalledWith(TEXT_DIRECT_VALUE);
        expect(onTouchedSpy).toHaveBeenCalled();
    });

});