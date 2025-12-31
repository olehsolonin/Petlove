export function getPaginationItems({
    page,
    totalPages,
    siblingCount = 1,
    boundaryCount = 1,
}) {
    if (totalPages <= 1) return [];

    const range = (start, end) =>
        Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const startPages = range(1, Math.min(boundaryCount, totalPages));
    const endPages = range(
        Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
        totalPages
    );

    const siblingsStart = Math.max(
        Math.min(
            page - siblingCount,
            totalPages - boundaryCount - siblingCount * 2 - 1
        ),
        boundaryCount + 2
    );

    const siblingsEnd = Math.min(
        Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
        (endPages[0] ?? totalPages + 1) - 2
    );

    const items = [];
    items.push(...startPages);

    if (siblingsStart > boundaryCount + 2) items.push('...');
    else if (boundaryCount + 1 < totalPages - boundaryCount)
        items.push(boundaryCount + 1);

    items.push(...range(siblingsStart, siblingsEnd));

    if (siblingsEnd < totalPages - boundaryCount - 1) items.push('...');
    else if (totalPages - boundaryCount > boundaryCount)
        items.push(totalPages - boundaryCount);

    items.push(...endPages);

    // убрать дубликаты (на малых totalPages)
    return items.filter((v, i, a) => a.indexOf(v) === i);
}
