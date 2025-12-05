"use client";

import { useState } from "react";
import { X, Sparkles, Loader2, ChevronRight, ExternalLink, ChevronDown } from "lucide-react";

interface DataModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string | string[];
    type?: "text" | "list" | "link";
    linkUrl?: string;
    icon?: React.ReactNode;
    onImproveWithAI?: () => Promise<string>;
}

export function DataModal({
    isOpen,
    onClose,
    title,
    content,
    type = "text",
    linkUrl,
    icon,
    onImproveWithAI
}: DataModalProps) {
    const [isImproving, setIsImproving] = useState(false);
    const [improvedContent, setImprovedContent] = useState<string | null>(null);

    // Close on escape
    if (typeof window !== 'undefined') {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    if (!isOpen) return null;

    const handleImprove = async () => {
        if (!onImproveWithAI) return;
        setIsImproving(true);
        try {
            const result = await onImproveWithAI();
            setImprovedContent(result);
        } catch (error) {
            console.error("AI improvement failed:", error);
        } finally {
            setIsImproving(false);
        }
    };

    const displayContent = improvedContent || content;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                    <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        {icon}
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/80 rounded-lg transition"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                    {type === "list" && Array.isArray(displayContent) ? (
                        <ul className="space-y-2">
                            {displayContent.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-slate-700 py-2 border-b border-slate-100 last:border-0"
                                >
                                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    ) : type === "link" && linkUrl ? (
                        <div className="space-y-4">
                            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                                {displayContent}
                            </p>
                            <a
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Открыть страницу
                            </a>
                        </div>
                    ) : (
                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                            {displayContent}
                        </p>
                    )}

                    {improvedContent && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-xs text-green-600 flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Текст улучшен с помощью ИИ
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t bg-slate-50">
                    {onImproveWithAI && !improvedContent ? (
                        <button
                            onClick={handleImprove}
                            disabled={isImproving}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:from-violet-600 hover:to-purple-600 transition disabled:opacity-50"
                        >
                            {isImproving ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Sparkles className="w-4 h-4" />
                            )}
                            {isImproving ? "Улучшаю..." : "Улучшить с ИИ"}
                        </button>
                    ) : (
                        <div />
                    )}

                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
}

// Expandable text component with "Read more" - ALWAYS shows button
interface ExpandableTextProps {
    text: string;
    maxLength?: number;
    title: string;
    icon?: React.ReactNode;
    onImproveWithAI?: () => Promise<string>;
    alwaysShowButton?: boolean;
}

export function ExpandableText({
    text,
    maxLength = 100,
    title,
    icon,
    onImproveWithAI,
    alwaysShowButton = true
}: ExpandableTextProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!text) return null;

    const isLong = text.length > maxLength;
    const truncated = isLong ? text.slice(0, maxLength) + "..." : text;

    return (
        <>
            <div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    {truncated}
                </p>
                {(isLong || alwaysShowButton) && (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition"
                    >
                        <ChevronDown className="w-4 h-4" />
                        Подробнее
                    </button>
                )}
            </div>

            <DataModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                content={text}
                icon={icon}
                onImproveWithAI={onImproveWithAI}
            />
        </>
    );
}

// Expandable list component
interface ExpandableListProps {
    items: string[];
    maxItems?: number;
    title: string;
    icon?: React.ReactNode;
}

export function ExpandableList({ items, maxItems = 4, title, icon }: ExpandableListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!items || items.length === 0) return null;

    const isLong = items.length > maxItems;
    const visible = isLong ? items.slice(0, maxItems) : items;

    return (
        <>
            <ul className="space-y-1.5">
                {visible.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition"
            >
                <ChevronDown className="w-4 h-4" />
                {isLong ? `Показать все (${items.length})` : "Подробнее"}
            </button>

            <DataModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                content={items}
                type="list"
                icon={icon}
            />
        </>
    );
}
