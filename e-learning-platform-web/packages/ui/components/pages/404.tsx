import { page404 } from './../../utils/constant/404';
import { ListTypography } from './../../components/molecules/typography/ListTypography';
interface Props {
    desc?: string;
};

export function NotFound({ desc }: Props) {
    return (
        <div className="flex justify-center m-2">
            <div style={{ background: 'rgba(17, 138, 239, 0.05)' }} className="flex flex-col md:flex-row md:max-w-xl rounded-lg p-6">
                <div>
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src="https://yt3.ggpht.com/7wRueRiG46yDOajTfHkH1Xv9ZbEirrXtoxNeU_h_GsCkE4mwmMRNEqchpeZTHRc3fP8w196yy3v3=s640-c-fcrop64=1,00000000ffffffff-nd-v1"
                        alt="img404"
                    />
                </div>
                <div className=" ml-5 flex flex-col justify-start">
                    <h6 className="text-gray-500 text-xl font-medium">
                        404 Error Causes
                    </h6>
                    <div>
                        {page404.map((item, index) => {
                            return (
                                <ListTypography
                                    key={index}
                                    icon={item.icon}
                                    desc={item.desc}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};