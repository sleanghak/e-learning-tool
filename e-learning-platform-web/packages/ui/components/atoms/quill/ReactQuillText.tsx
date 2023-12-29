
import dynamic from 'next/dynamic';

const ReactQuill: any = dynamic(() => import('react-quill'), {
    ssr: false,
})

export interface Props {
    /**
     * Placeholder of text field
     */
    placeholder: string,
    /**
     * setState from useState given by parent 
     * example const [value,setValue]=React.useState();
     * so setValue got from parent component
     */
    onChange?: any,
    value?: any,
    readonly: boolean,
    theme: "snow" | "bubble"
}
export const ReactQuillText = ({ theme = "snow", value, readonly = false, placeholder, onChange, ...props }: Props): any => {

    return (
        <>
            <ReactQuill theme={theme} value={value} readOnly={readonly} modules={{ toolbar: toolbarOptions }}  {...props} placeholder={placeholder} onChange={onChange} />
        </>
    )
}

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
];








