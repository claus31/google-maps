export class MxUiMock implements mx.ui {
    action(
        actionname: string,
        action: {
            progress?: string,
            progressMsg?: string,
            params?: {
                applyto?: string,
                guids?: string[],
                xpath?: string,
                constraints?: string,
                sort?: any,
                gridid?: string,
            },
            context?: any,
            store?: any,
            async?: boolean,
            callback?: (result: mendix.lib.MxObject | mendix.lib.MxObject[] | boolean | number | string) => void,
            error?: (e: Error) => void,
            onValidation?: Function,
        },
        scope?: any
    ): void { /* */ }

    back(): void { /* */ }
    confirmation(args: { content: string, proceed: string, cancel: string, handler: Function }): void { /* */ }
    error(msg: string, modal?: boolean): void { /* */ }
    exception(msg: string): void { /* */ }
    getTemplate(mxid: string, content: string): DocumentFragment {
        const fakeElement: any = "Fake";
        return fakeElement;
    }
    showProgress(): number { return 11; }
    hideProgress(pid: number): void { /* */ }
    info(msg: string, modal: boolean): void { /* */ }
    onError(error: Error): void { /* */ }
    showUnderlay(delay?: number): void { /* */ }
    hideUnderlay(delay?: number): void { /* */ }
    resize(): void { /* */ }
    isRtl(): string { return "Fake"; }
    openForm(
        path: string,
        args?: {
            location?: "content" | "popup" | "modal",
            domNode?: HTMLElement,
            title?: string,
            context?: mendix.lib.MxContext,
            callback?(form: mxui.lib.form._FormBase): void,
            error?(error: Error): void,
        },
        scope?: any
    ): void { /* */ }
    showLogin(messageCode: number): void { /* */ }
}