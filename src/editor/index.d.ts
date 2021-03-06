declare module "@easylogic/editor" {

    // gl-matrix 
    // prettier-ignore
    export type mat2 =
        | [number, number,
            number, number]
        | Float32Array;

    // prettier-ignore
    export type mat2d =
        | [number, number,
            number, number,
            number, number]
        | Float32Array;

    // prettier-ignore
    export type mat3 =
        | [number, number, number,
            number, number, number,
            number, number, number]
        | Float32Array;

    // prettier-ignore
    export type mat4 =
        | [number, number, number, number,
            number, number, number, number,
            number, number, number, number,
            number, number, number, number]
        | Float32Array;

    export type quat = [number, number, number, number] | Float32Array;

    // prettier-ignore
    export type quat2 =
        | [number, number, number, number,
            number, number, number, number]
        | Float32Array;

    export type vec2 = [number, number] | Float32Array;
    export type vec3 = [number, number, number] | Float32Array;
    export type vec4 = [number, number, number, number] | Float32Array;

    // prettier-ignore
    export type ReadonlyMat2 =
        | readonly [
            number, number,
            number, number
        ]
        | Float32Array;

    // prettier-ignore
    export type ReadonlyMat2d =
        | readonly [
            number, number,
            number, number,
            number, number
        ]
        | Float32Array;

    // prettier-ignore
    export type ReadonlyMat3 =
        | readonly [
            number, number, number,
            number, number, number,
            number, number, number
        ]
        | Float32Array;

    // prettier-ignore
    export type ReadonlyMat4 =
        | readonly [
            number, number, number, number,
            number, number, number, number,
            number, number, number, number,
            number, number, number, number
        ]
        | Float32Array;

    export type ReadonlyQuat =
        | readonly [number, number, number, number]
        | Float32Array;

    export type ReadonlyQuat2 =
        | readonly [number, number, number, number, number, number, number, number]
        | Float32Array;

    export type ReadonlyVec2 = readonly [number, number] | Float32Array;
    export type ReadonlyVec3 = readonly [number, number, number] | Float32Array;
    export type ReadonlyVec4 =
        | readonly [number, number, number, number]
        | Float32Array;

    // gl-matrix 

    export const makeEventChecker = (value: string, split: string) => string;

    // event name regular expression
    export const EVENT: (...args: string[]) => string;
    export const COMMAND = EVENT;
    export const ON = EVENT;


    // Predefined CHECKER
    export const CHECKER = (value: string, split: string) => string;
    export const AFTER = (value: string, split: string) => string;
    export const BEFORE = (value: string, split: string) => string;

    export const IF = CHECKER;
    export const KEY = CHECKER;

    export const ARROW_UP: string;
    export const ARROW_DOWN: string;
    export const ARROW_LEFT: string;
    export const ARROW_RIGHT: string;
    export const ENTER: string;
    export const SPACE: string;
    export const ESCAPE: string;

    export const ALT: string;
    export const SHIFT: string;
    export const META: string;
    export const CONTROL: string;
    export const SELF: string;
    export const LEFT_BUTTON: string;

    export const FIT: string;
    export const PASSIVE: string;
    export const DOMDIFF: string;

    // event config method
    export const DEBOUNCE = (t: number = 100) => string;
    export const DELAY = (t: number = 300) => string;
    export const D1000: string;

    export const THROTTLE = (t: number = 100) => string;

    export const ALL_TRIGGER: string;

    export const CAPTURE: string;

    // event config method

    // before method

    // after method
    export const MOVE = (method: string = "move") => string;
    export const END = (method: string = "end") => string;

    export const PREVENT = string;
    export const STOP = string;

    const CallbackFunction = (...args: string[]) => string;

    const DOM_EVENT_MAKE = (...keys: string[]) => CallbackFunction;
    const SUBSCRIBE_EVENT_MAKE = CallbackFunction;

    export const SUBSCRIBE: CallbackFunction;
    export const SUBSCRIBE_ALL: CallbackFunction;
    export const CUSTOM: DOM_EVENT_MAKE;
    export const CLICK: CallbackFunction;
    export const DOUBLECLICK: CallbackFunction;
    export const MOUSEDOWN: CallbackFunction;
    export const MOUSEUP: CallbackFunction;
    export const MOUSEMOVE: CallbackFunction;
    export const MOUSEOVER: CallbackFunction;
    export const MOUSEOUT: CallbackFunction;
    export const MOUSEENTER: CallbackFunction;
    export const MOUSELEAVE: CallbackFunction;
    export const TOUCHSTART: CallbackFunction;
    export const TOUCHMOVE: CallbackFunction;
    export const TOUCHEND: CallbackFunction;
    export const KEYDOWN: CallbackFunction;
    export const KEYUP: CallbackFunction;
    export const KEYPRESS: CallbackFunction;
    export const DRAG: CallbackFunction;
    export const DRAGSTART: CallbackFunction;
    export const DROP: CallbackFunction;
    export const DRAGOVER: CallbackFunction;
    export const DRAGENTER: CallbackFunction;
    export const DRAGLEAVE: CallbackFunction;
    export const DRAGEXIT: CallbackFunction;
    export const DRAGOUT: CallbackFunction;
    export const DRAGEND: CallbackFunction;
    export const CONTEXTMENU: CallbackFunction;
    export const CHANGE: CallbackFunction;
    export const INPUT: CallbackFunction;
    export const FOCUS: CallbackFunction;
    export const FOCUSIN: CallbackFunction;
    export const FOCUSOUT: CallbackFunction;
    export const BLUR: CallbackFunction;
    export const PASTE: CallbackFunction;
    export const RESIZE: CallbackFunction;
    export const SCROLL: CallbackFunction;
    export const SUBMIT: CallbackFunction;

    // pointerstart ??? ?????? drag ??? ?????? ??????????????? ?????????  left button ??? ????????????. 
    // context ????????? wheel ??? ???????????? ?????????. 
    export const POINTERSTART: CallbackFunction;
    // 

    export const POINTEROVER: CallbackFunction;
    export const POINTERENTER: CallbackFunction;
    export const POINTEROUT: CallbackFunction;
    export const POINTERMOVE: CallbackFunction;
    export const POINTEREND: CallbackFunction;
    export const CHANGEINPUT: CallbackFunction;
    export const WHEEL: CallbackFunction;
    export const ANIMATIONSTART: CallbackFunction;
    export const ANIMATIONEND: CallbackFunction;
    export const ANIMATIONITERATION: CallbackFunction;
    export const TRANSITIONSTART: CallbackFunction;
    export const TRANSITIONEND: CallbackFunction;
    export const TRANSITIONRUN: CallbackFunction;
    export const TRANSITIONCANCEL: CallbackFunction;
    export const DOUBLETAB: CallbackFunction;


    // Predefined LOADER
    export const LOAD = (value: string = "$el") => string;
    export const createRef = value => string;
    export const getRef = id => any;
    export const BIND = (value: string = "$el", checkFieldOrCallback: string = '') => string;


    export interface KeyValue {
        [key: string]: any;
    }

    export interface ElementValue<T> {
        [key: string]: T;
    }

    interface IComponentParams extends KeyValue {

    }

    export class Length {
        unit: string;
        value: number;
    }

    export class Dom {

        el: HTMLElement;

        static create(tag: string | HTMLElement | Dom | DocumentFragment, className: string, attr: KeyValue): Dom;
        static createByHTML(htmlString: string): Dom | null;
        static body(): Dom;

        find(selector: string): HTMLElement;
        $(selector: string): Dom | null;

        findAll(selector: string): HTMLElement[];
        $$(selector: string): Dom[];

        replaceChild(oldElement: Dom | HTMLElement, newElement: Dom | HTMLElement): Dom;

        checked(isChecked = false): Dom | boolean;
        click(): Dom;
        focus(): Dom;
        select(): Dom;
        blur(): Dom;

        // canvas functions

        context(contextType: string = "2d"): CanvasRenderingContext2D;

        resize({ width: number, height: number }: KeyValue): void;

        toDataURL(type = 'image/png', quality = 1): string;

        clear(): void;

        update(callback: Function): void;

        drawImage(img: any, dx: number = 0, dy: number = 0): void;
        drawOption(option: KeyValue = {}): void;
        drawLine(x1: number, y1: number, x2: number, y2: number): void;
        drawPath(...path: vec3[]): void;
        drawCircle(cx: number, cy: number, r: number): void;
        drawText(x: number, y: number, text: string): void;

        /* utility */
        fullscreen(): void;
        toggleFullscreen(): void;
    }

    export class BaseStore { }

    export class Item {
        getDefaultTitle(): string;
        getIcon(): string;
        isAttribute(): boolean;
        isChanged(timestamp: number): boolean;
        changed();

        /**
         * title ?????? 
         */
        get title(): string;

        /**
         * 
         * @returns ????????? ????????? ?????? ?????? ????????? ?????? 
         */
        get allLayers(): Item[];

        /**
         * get id
         */
        get id(): string;

        /**
         * ?????? ?????? ?????????
         * 
         * @returns {Item[]}
         */
        get layers(): Item[];

        /**
         * @returns {Item}
         */
        get parent(): Item;

        setParent: (otherParent: Item) => void;

        /**
         * ?????? ????????? ???????????? ?????? 
         * 
         * @returns {number}
         */
        get depth(): number;

        /**
         * ????????? ???????????? ?????? 
         * 
         * @returns {Item}
         */
        get top(): Item;

        /**
         * ????????? project ????????? 
         * 
         * @returns {Project}
         */
        get project(): Item;

        /**
         * ????????? artboard ????????? 
         * 
         * @returns {ArtBoard}
         */
        get artboard(): Item;

        /**
         * ?????? ?????? ????????? instance ?????????
         * 
         * @returns {Item[]}
         */
        get path(): Item[];

        /**
         * ????????? ????????? ??? ?????? ?????? ?????? 
         * 
         * @returns {number}  ?????? ?????? index 
         */
        get positionInParent(): number;

        /**
         * id ?????? ????????? id ??????
         * 
         * @param {string} postfix 
         */
        getInnerId: (postfix: string = '') => string;

        // selection ????????? 
        // ????????? , width, height ?????? geometry ??? ??????????????? ??? ?????? ?????? ?????? 
        recover: () => void;

        setCache: () => void;

        is(checkItemType: string): boolean;

        isNot(checkItemType: string): boolean;

        isSVG(): boolean;


        /***********************************
         *
         * action
         *
         **********************************/

        // ?????? ????????? ????????? ?????? 
        generateListNumber(): void;

        /**
         * when json is loaded, json object is be a new instance
         *
         * @param {*} json
         */
        convert(json: KeyValue): KeyValue;

        /**
         * defence to set invalid key-value
         */
        checkField(key: string, value: any): boolean;

        toCloneObject(isDeep: boolean = true): KeyValue;

        /**
         * clone Item
         */
        clone(isDeep: boolean = true): Item;

        /**
         * set json content
         *
         * @param {object} obj
         */
        reset(obj: KeyValue): void;

        hasChangedField(...args: string[]): boolean;

        /**
         * define default object for item
         *
         * @param {object} obj
         */
        getDefaultObject(obj: KeyValue = {}): KeyValue;

        /**
         * ????????? ????????? ?????? object ????????? ????????????. 
         * 
         * @param  {...string} args ?????? ????????? 
         */
        attrs(...args: string[]): any[];

        /**
         * ????????? ????????? ????????? ?????? 
         * 
         * @returns {boolean}
         */
        hasChildren(): boolean;

        /**
         * ???????????? ????????????. 
         * 
         * @param {Item} layer 
         */
        appendChildItem(layer: Item): Item;

        /**
         * ???????????? ????????? ????????????. 
         * 
         * @param {Item} layer 
         */
        prependChildItem(layer: Item): Item;

        resetMatrix(item: Item): void;
        /**
         * ?????? index ??? ????????? ????????????. 
         * 
         * @param {Item} layer 
         * @param {number} index 
         */
        insertChildItem(layer: Item, index: number = 0): Item;

        /**
         * ?????? Item ??? ??? ?????? ????????? ????????????. 
         * 
         * @param {Item} layer 
         */
        appendAfter(layer: Item): Item;


        /**
         * ?????? Item ??? ?????? ????????? ????????????. 
         * 
         * @param {Item} layer 
         */
        appendBefore(layer: Item): Item;

        /**
         * ????????? ????????? ?????? ????????? Item ??? ?????? ??????. 
         * set position in layers 
         * 
         * @param {Number} position 
         * @param {Item} item 
         */
        setPositionInPlace(position: number, item: Item): void;

        /**
         * toggle item's attribute
         *
         * @param {*} field
         * @param {*} toggleValue
         */
        toggle(field: string, toggleValue: boolean | undefined = undefined): void;

        isTreeItemHide(): boolean;

        expectJSON(key: string): boolean;

        /**
         * convert to json
         * 
         */
        toJSON(): KeyValue;

        resize(): void;

        /**
         * Item ???????????? 
         * 
         * @param {number} dist 
         */
        copy(dist: number = 0): Item
        findIndex(item: Item): number;

        copyItem(childItem: Item, dist: number = 10): Item;

        /**
         * ?????? ???????????? ?????? ?????????. 
         * remove self in parent 
         */
        remove(): void;

        /**
         * remote child item 
         * 
         * @param {Item} childItem 
         */
        removeItem(childItem: Item): void;

        /**
         * ?????? ???????????? ????????? ????????? ?????? ??????. 
         * 
         * @param {string} parentId 
         */
        hasParent(parentId: string): boolean;

        /**
         * ?????? ?????? ?????? ?????? id??? ?????? Item ??? ????????????. 
         * 
         * @param {string} id 
         * @returns {Item|null} ????????? Item ?????? 
         */
        searchById(id: string): Item | null;
    }

    interface IKeyMat4Value {
        [key: string]: mat4;
    }

    interface ICachedMatrix {
        id: string;
        x: number;
        y: number;
        width: number;
        height: number;
        transform: string;
        originalTransformOrigin: string;
        /**
         * ???????????? ?????? vertext ??? ?????? 
         */
        verties: vec3[];
        /**
         * ???????????? vertext ??? ????????? ?????? vertext 
         * ?????? ????????? ????????? ?????? ??? ??? ??????. 
         */
        rectVerties: vec3[];
        xList: number[];
        yList: number[];
        directionMatrix: IKeyMat4Value;
        parentMatrix: mat4;
        parentMatrixInverse: mat4;
        localMatrix: mat4;    // ?????? ????????? matrix with translate offset(x,y)
        localMatrixInverse: mat4;
        itemMatrix: mat4;     // ?????? ????????? matrix without translate offset(x,y)
        itemMatrixInverse: mat4;
        accumulatedMatrix: mat4;  // parentMatrix * offset translate * localMatrix , ????????? matrix 
        accumulatedMatrixInverse: mat4;
    }

    interface PathParser { }

    export class MovableItem extends Item {

        get isAbsolute(): boolean;
        get isRelative(): boolean;
        get isChild(): boolean;

        toCloneObject(isDeep: boolean = true): KeyValue;

        convert(json: KeyValue): KeyValue;

        //////////////////////
        //
        // getters 
        //
        ///////////////////////


        get screenX(): Length;
        get screenY(): Length;
        get offsetX(): Length;
        get offsetY(): Length;
        get screenWidth(): Length;
        get screenHeight(): Length;

        setScreenX(value: number): void;
        setScreenY(value: number): void;

        /**
         * Item ???????????? 
         *  
         * @param {vec3} distVector 
         */
        move(distVector: vec3 = [0, 0, 0]): void;
        moveByCenter(newCenter: vec3 = [0, 0, 0]): void;

        /**
         * ?????? ?????? 
         * 
         * polygon : ploygon ????????? ?????? ????????? ??????. 
         * 
         * @param {*} areaVerties 
         */
        checkInArea(areaVerties: vec3[]): boolean;

        /**
         * ?????? ????????? ????????? ???????????? ????????? ????????????. 
         * 
         * @param {number} x 
         * @param {number} y 
         */
        hasPoint(x: number, y: number): boolean;

        /**
         * areaVerties ?????? Layer ??? ????????? ?????? 
         * 
         * @param {vec3[]} areaVerties 
         */
        isIncludeByArea(areaVerties: vec3[]): boolean;

        getPerspectiveMatrix(): mat4 | undefined;

        getItemTransformMatrix(): mat4;

        getItemTransformMatrixInverse(): mat4;

        /**
         * refer to https://www.w3.org/TR/css-transforms-2/
         * 
         * 1. Start with the identity matrix.
         * 2. Translate by the computed X, Y and Z of transform-origin
         * 3. Multiply by each of the transform functions in transform property from left to right
         * 4. Translate by the negated computed X, Y and Z values of transform-origin
         */
        getTransformMatrix(): mat4;

        getTransformMatrixInverse(): mat4;

        /**
         * ????????? ?????? matrix ????????? 
         * 
         * @param {vec3} vertextOffset 
         */
        getDirectionTransformMatrix(vertextOffset: vec3, width: Length, height: Length): mat4;
        getDirectionTopLeftMatrix(width: Length, height: Length): mat4;
        getDirectionLeftMatrix(width: Length, height: Length): mat4;
        getDirectionTopMatrix(width: Length, height: Length): mat4;
        getDirectionBottomLeftMatrix(width: Length, height: Length): mat4;
        getDirectionTopRightMatrix(width: Length, height: Length): mat4;
        getDirectionRightMatrix(width: Length, height: Length): mat4;
        getDirectionBottomRightMatrix(width: Length, height: Length): mat4;
        getDirectionBottomMatrix(width: Length, height: Length): mat4;

        getAccumulatedMatrix(): mat4;
        getAccumulatedMatrixInverse(): mat4;

        verties(width: Length, height: Length): vec3[];
        selectionVerties(): vec3[];
        rectVerties(): vec3[];
        guideVerties(): vec3[];

        get matrix(): ICachedMatrix;

        /**
         * 
         * @returns {vec3[]} ????????? verties 
         */
        pathVerties(): vec3[];

        /**
         * ????????? matrix ????????? path segment 
         * 
         * @returns {PathParser} 
         */
        accumulatedPath(pathString: string = ''): PathParser;

        // ?????? ???????????? ????????? path ??? ?????? verties ??? 
        // svg container ??? matrix ??? inverse matrix ??? ????????? ????????? ??????.     
        invertPath(pathString: string = ''): PathParser;

        /**
         * pathString ??? ????????? ?????? ????????? ?????????. 
         * 
         * @param {string} pathString   svg path string 
         */
        invertPathString(pathString: string = ''): string;

        /**
         * ?????? ????????? ?????? layer ??? ????????? ????????????. 
         * 
         * project, artboard ??? ?????? 
         * 
         * @param {vec3[]} areaVerties 
         */
        checkInAreaForAll(areaVerties: vec3[]): MovableItem[];

        /**
         * area ??? ???????????? ?????? ??????, 
         * 
         * @param {vec3[]} areaVerties 
         * @returns {Item[]}  ?????? ????????? ????????? ?????? ????????? 
         */
        checkInAreaForLayers(areaVerties: vec3[]): MovableItem[];

        getTransformOriginMatrix(): mat4;

        getTransformOriginMatrixInverse(): mat4;

        /**
         * ????????? ????????? ???????????? childItem ??? transform ??? ?????????. 
         * 
         * 1. childItem ??? accumulatedMatrix ??? ?????????. 
         * 2. ????????? ????????? ???????????? ????????? ?????? ?????????.   parentItem.accumulatedMatrixInverse 
         * 
         * childItem ??? ????????? ????????? parent ??? ?????? ??????  
         * itemMatrix (rotateZ) ??? ?????? ????????? offset ??? ?????? ????????? ????????? ??????. 
         * 
         * @param {Item} childItem 
         */
        resetMatrix(childItem: Item): void;

        /** order by  */

        getIndex(): number;
        setOrder(targetIndex: number): void;

        // get next sibiling item 
        next(): MovableItem;

        // get prev sibiling item   
        prev(): MovableItem;

        /**
         * ???????????? ????????? ???????????? ?????????. 
         * ???, ???????????? ????????? ???????????? ????????????. 
         */
        orderNext(): void;

        isFirst(): boolean;

        isLast(): boolean;
        /**
         * ???????????? ????????? ???????????? ?????????. 
         * ???, ???????????? ????????? ???????????? ????????????.
         */
        orderPrev(): void;

        // ????????? ???????????? ????????? 
        orderFirst(): void;

        // ????????? ??????????????? ????????? 
        orderLast(): void;

        //TODO: ???????????? ???????????? ????????? 
        orderTop(): void;
        //TODO: ???????????? ??????????????? ????????? 
        orderBottom(): void;
    }

    export class GroupItem extends MovableItem {

        get isGroup(): boolean;

        isLayoutItem(): boolean;

        /**
         * 
         * ??????????????? ????????? ?????? container ?????? ??????
         * 
         * @returns {boolean}
         */
        hasLayout(): boolean;

        isInGrid(): boolean;

        isInFlex(): boolean;
    }

    export class DomItem extends GroupItem {

    }

    export class Layer extends DomItem {

    }

    export class Component extends Layer {
        static createComponent: (params: IComponentParams) => Component;
    }

    class EventMachine {

        protected opt: KeyValue = {};
        protected parent: any;
        protected props: KeyValue = {};
        public source: string;
        public sourceName: string;

        /**
         * UIElement instance ??? ????????? ?????? ?????? ?????? 
         */
        protected initializeProperty(opt: KeyValue, props: any = {}): void;

        protected initComponents(): void;

        protected initializeHandler(): any[];


        /**
         * state ??? ????????? ????????? ????????????. 
         * 
         * @protected
         * @returns {Object} 
         */
        protected initState(): KeyValue;

        /**
         * state ??? ????????????. 
         * 
         * @param {Object} state  ????????? state 
         * @param {Boolean} isLoad  ?????? ?????? ??? ????????? ?????? , true ??? state ????????? ?????? ?????? 
         */
        setState(state: KeyValue = {}, isLoad: boolean = true): void;

        /**
         * state ??? ?????? key ????????? ?????? ????????????. 
         * Boolean ????????? ?????? ????????????. 
         * 
         * @param {string} key 
         * @param {Boolean} isLoad 
         */
        toggleState(key: string, isLoad: boolean = true): void;

        /**
         * ????????? ?????? ?????? ??? ????????????. 
         * 
         * @param {*} props 
         * @protected
         */
        protected _reload(props: KeyValue): void;

        /**
         * template ??? ????????? ??????. 
         * 
         * @param {Dom|undefined} $container  ??????????????? ????????? ?????? 
         */
        render($container: Dom | undefined): void;

        protected initialize(): void;

        /**
         * render ????????? ????????? ?????? 
         * dom ??? ????????? ????????? ????????? ????????? ???????????? ????????????. 
         * 
         * @protected
         */
        protected afterRender(): void;

        /**
         * ????????? ????????? ???????????? ???????????? 
         * 
         * @protected
         * @returns {Object}
         */
        protected components(): KeyValue;

        /**
         * ref ????????? ?????? Component ??? ????????? ??????. 
         * 
         * @param  {any[]} args 
         * @returns {EventMachine}
         */
        getRef(...args: string[]): Dom;


        /**
         * refresh ??? load ???????????? ????????????. 
         */
        public refresh(): void;

        async load(...args: any[]): void;


        public bindData(...args: string[]): void;

        // ?????? ????????? ??????
        template(): string;

        // 
        protected eachChildren(callback: Function): void;

        rerender(): void;

        /**
         * ????????? ????????????.
         * ????????? ?????? ?????? ?????????????????? ???????????? ????????? ?????? ????????? ???????????? ????????? ???????????? ??????.
         * 
         */
        destroy(): void;

        /* magic check method  */

        protected self(e: any): boolean;

        protected isAltKey(e: any): boolean;
        protected isCtrlKey(e: any): boolean;
        protected isShiftKey(e: any): boolean;
        protected isMetaKey(e: any): boolean;
        protected isMouseLeftButton(e: any): boolean;
        /** before check method */

        /* after check method */

        protected preventDefault(e: any): boolean;
        protected stopPropagation(e: any): boolean;
        protected bodyMouseMove(e: any, methodName: string): void;
        protected bodyMouseUp(e: any, methodName: string): void;
    }

    class UIElement extends EventMachine {

        /**
         * UIElement ??? ????????? ??? ???????????? ????????? 
         * @protected
         */
        protected created(): void;

        /**
         * UIElement ???????????? ???????????? ?????? ??????. 
         * ??? ????????? ??????????????? ???????????? ????????????. 
         * 
         * @param {string} messageName
         * @param {any[]} args 
         */
        emit(messageName: string, ...args: any[]): void;

        /**
         * MicroTask ??? ????????????. 
         * 
         * @param {Function} callback 
         */
        nextTick(callback: Function);

        /**
         * 
         * UIElement ????????? ???????????? ????????????. 
         * emit ??? ????????? ???????????? ???????????? ????????? 
         * 
         * @param {string} messageName 
         * @param {any[]} args 
         */
        trigger(messageName: string, ...args: any[]): void;

        /**
         * ?????? ????????????????????? ???????????? ?????????. 
         * 
         * @param messageName 
         * @param args 
         */
        broadcast(messageName: string, ...args: any[]): void;

        /**
         * ????????? ?????? 
         * 
         * @param message 
         * @param callback 
         */
        on(message: string, callback: Function): void;

        /**
         * ????????? ?????? ?????? 
         * @param message 
         * @param callback 
         */
        off(message: string, callback: Function): void;
    }

    interface ConfigManager { }
    interface ShortCutManager { }
    interface SelectionManager { }
    interface ViewportManager { }
    interface SnapManager { }
    interface HistoryManager { }
    interface KeyBoardManager { }
    interface MenuItemManager { }

    export class EditorElement extends UIElement {

        get $editor(): EditorInstance;
        get $store(): BaseStore;

        /**
         * i18n ???????????? ????????????. 
         * 
         * @param {string} key 
         * @returns {string} i18n ????????? 
         */
        $i18n(key: string): string;

        get $config(): ConfigManager;

        /**
         * @type {SelectionManager} $selection
         */
        get $selection(): SelectionManager;

        /**
         * @type {ViewportManager} $viewport
         */
        get $viewport(): ViewportManager;

        /**
         * @type {SnapManager} $snapManager
         */
        get $snapManager(): SnapManager;


        get $history(): HistoryManager;

        /**
         * @type {ShortCutManager} $shortcuts
         */
        get $shortcuts(): ShortCutManager;

        /**
         * @type {KeyBoardManager} $keyboardManager
         */
        get $keyboardManager(): KeyBoardManager;

        /**
         * @type {StorageManager} $storageManager
         */
        get $storageManager(): StorageManager;

        get $menuManager(): MenuItemManager;

        /**
         * history ??? ????????? ???????????? command ????????? ????????????. 
         * ????????? ??? ????????? ????????? ???????????? history ???????????? ???????????????. 
         * ?????? emit ??? ?????? ???????????? ????????? ??? ??????.   
         * 
         * @param {string} command 
         * @param {string} description 
         * @param {any[]} args 
         */

        command(command: string, description: string, ...args: any[]): any;

        $theme(key: sring): any;
    }


    export class BaseProperty extends EditorElement {

        onToggleShow(): void;

        protected setTitle(title: string): void;

        protected isHideHeader(): boolean;

        protected isFirstShow(): boolean;

        protected getClassName(): string;

        protected getTitleClassName(): string;


        protected getBodyClassName(): string;


        getTitle(): string;

        getTools(): string;

        getBody(): string;

        getFooter(): string;

        isPropertyShow(): boolean;

        toggle(isShow: boolean): void;

        hide(): void;

        show(): void;

        onShowTitle(isShow: boolean): void;
        refreshShowIsNot(type: string = '', isRefresh: boolean = true): void;

        refreshShow(type: string, isRefresh: boolean = true): void;

    }


    export class MenuItem extends EditorElement {

        clickButton(e): void;

        getChecked(): boolean;

        isDisabled(): boolean;

        setSelected(isSelected: boolean): void;

        getTitle(): string;

        getIcon(): string;

        getIconString(): string;

        isHideTitle(): boolean;

        static createMenuItem(opt: KeyValue = {}): MenuItem;
    }

    interface ICommandObject {

    }

    interface ShortcutObject {

    }

    export interface EditorInstance {
        registElement(obj: ElementValue<EditorElement>): void;
        registerMenuItem(target: string, obj: ElementValue<EditorElement>): void;
        registerComponent(name: string, component: IComponent);
        registerItem(name: string, item: Item);
        registerInspector(name: string, inspectorCallback: Function);

        registerRenderer(rendererType: string, name: string, rendererInstance: IRender);
        registerCommand(commandObject: Function | ICommandObject): void;
        registerShortCut(shortcut: ShortcutObject): void;

        /**
         * 
         * @param {PluginInterface} createPluginFunction  
         */
        registerPlugin(createPluginFunction: PluginInterface): void;

        registerPluginList(plugins: PluginInterface[] = []): void;

    }

    export interface PluginInterface {
        (editor: EditorInstance): void;
    }

    export interface EditorInterface {
        createDesignEditor (opt: KeyValue = {}): EditorElement;
        createDesignPlayer (opt: KeyValue = {}): EditorElement;
        plugins: PluginInterface[]

    }


    export interface HTMLRenderer {

        render(item: Item, renderer: HTMLRenderer): string;

        update(item: Item, currentElement: Dom, editor: EditorInstance): any;
    }

    export class Render {

    }

    export class HTMLItemRender extends Render {

        render(item: Item, renderer: HTMLRenderer): string;

        /**
         * ?????? ????????? ?????? ??????????????? ??? ??? 
         * 
         * @param {Item} item 
         * @param {Dom} currentElement 
         * @override
         */
        update(item: Item, currentElement: Dom): void;
    }

    export class DomRender extends HTMLItemRender { 
        toDefString (item:Item):string;
    }

    export class HTMLLayerRender extends DomRender {
    }


    const easylogic: EditorInterface;

    export type icon = ElementValue<string>;

    export default easylogic;
}