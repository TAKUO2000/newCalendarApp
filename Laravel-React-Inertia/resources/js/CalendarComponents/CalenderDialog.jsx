import { useState } from "react";

import {
    Dialog,
    DialogBackdrop,
    DialogTitle,
    DialogPanel,
} from "@headlessui/react";
import { FlagIcon } from "@heroicons/react/24/outline";

import AddSchedule from "./AddSchedule";
import DisplaySchedule from "./DisplaySchdule";

import React from "react";

const CalenderDialog = ({
    setDateSchedule,
    selectedDate,
    displayStartDate,
    dateSchedule,
    setOpenDate,
    openDate,
}) => {
    // 予定追加メニューの表示切替
    const [openInput, setOpenInput] = useState(false);

    const toggleOpenInput = () => {
        setOpenInput((p) => !p);
    };

    const closeDialog = () => {
        setOpenDate(false);
        setOpenInput(false);
    };

    return (
        <>
            <Dialog
                open={openDate}
                onClose={setOpenDate}
                className="relative z-10"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                        <FlagIcon />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-base font-semibold text-gray-900"
                                        >
                                            {displayStartDate}の予定
                                        </DialogTitle>
                                        <div className="mt-2 ">
                                            {dateSchedule.length > 0 ? (
                                                <>
                                                    <div className="my-2 p-2 border-gray-400 border-b-2 border-soli">
                                                        <h3 className="text-gray-500">
                                                            本日から始まる予定
                                                        </h3>
                                                        {dateSchedule.map(
                                                            (item) =>
                                                                item.start.substr(
                                                                    0,
                                                                    10
                                                                ) ===
                                                                    selectedDate && (
                                                                    <DisplaySchedule
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        item={
                                                                            item
                                                                        }
                                                                        setDateSchedule={
                                                                            setDateSchedule
                                                                        }
                                                                    />
                                                                )
                                                        )}
                                                    </div>

                                                    <h3 className="text-gray-500">
                                                        他の予定
                                                    </h3>
                                                    {dateSchedule.map(
                                                        (item) =>
                                                            item.start.substr(
                                                                0,
                                                                10
                                                            ) !==
                                                                selectedDate && (
                                                                <DisplaySchedule
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    item={item}
                                                                    setDateSchedule={
                                                                        setDateSchedule
                                                                    }
                                                                />
                                                            )
                                                    )}
                                                </>
                                            ) : (
                                                <h2 className="text-gray-500">
                                                    予定なし
                                                </h2>
                                            )}
                                        </div>
                                        {openInput && (
                                            <>
                                                <AddSchedule
                                                    displayStartDate={
                                                        displayStartDate
                                                    }
                                                    selectedDate={selectedDate}
                                                    setDateSchedule={
                                                        setDateSchedule
                                                    }
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => closeDialog()}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    cancel
                                </button>

                                <button
                                    type="button"
                                    onClick={() => toggleOpenInput()}
                                    className="mt-2 sm:mt-0 inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    {openInput ? "追加終了" : "予定追加"}
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default CalenderDialog;
