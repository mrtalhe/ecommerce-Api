let CommentStatus;
(function (CommentStatus) {
    CommentStatus["Pending"] = "PENDING";
    CommentStatus["Approved"] = "APPROVED";
    CommentStatus["Rejected"] = "REJECTED";
})(CommentStatus || (CommentStatus = {}));

module.exports = {
    CommentStatus
}