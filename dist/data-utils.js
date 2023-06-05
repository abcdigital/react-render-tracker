var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce2;
  }
});

// src/common/constants.ts
var ElementTypeClass = 1;
var ElementTypeFunction = 2;
var ElementTypeMemo = 3;
var ElementTypeForwardRef = 4;
var ElementTypeProvider = 5;
var ElementTypeConsumer = 6;
var ElementTypeHostRoot = 7;
var ElementTypeHostComponent = 8;
var ElementTypeHostText = 9;
var ElementTypeHostPortal = 10;
var ElementTypeSuspense = 11;
var ElementTypeSuspenseList = 12;
var ElementTypeProfiler = 13;
var ElementTypeOtherOrUnknown = 14;
var FiberTypeName = {
  [ElementTypeClass]: "Class component",
  [ElementTypeFunction]: "Function component",
  [ElementTypeMemo]: "Memo",
  [ElementTypeForwardRef]: "ForwardRef",
  [ElementTypeProvider]: "Provider",
  [ElementTypeConsumer]: "Consumer",
  [ElementTypeHostRoot]: "Render root",
  [ElementTypeHostComponent]: "Host component",
  [ElementTypeHostText]: "Host text",
  [ElementTypeHostPortal]: "Host portal",
  [ElementTypeSuspense]: "Suspense",
  [ElementTypeSuspenseList]: "Suspense list",
  [ElementTypeProfiler]: "Profiler",
  [ElementTypeOtherOrUnknown]: "Unknown"
};
var LegacyRoot = 0;
var ConcurrentRoot = 1;
var fiberRootMode = {
  [LegacyRoot]: "Legacy Mode",
  [ConcurrentRoot]: "Concurrent Mode"
};
var TrackingObjectFiber = 0;
var TrackingObjectAlternate = 1;
var TrackingObjectStateNode = 2;
var TrackingObjectHook = 3;
var TrackingObjectTypeName = {
  [TrackingObjectFiber]: "fiber",
  [TrackingObjectAlternate]: "alternate",
  [TrackingObjectStateNode]: "stateNode",
  [TrackingObjectHook]: "hook"
};

// src/data/process-events.ts
function isShallowEqual(entry) {
  return entry.diff === false;
}
function eventChangesWarnings(fiber, changes) {
  const warnings = /* @__PURE__ */ new Set();
  if (fiber.type === ElementTypeProvider && changes?.props) {
    const shallowValueChange = changes.props.find(
      (change) => change.name === "value" && isShallowEqual(change)
    );
    if (shallowValueChange) {
      warnings.add(shallowValueChange);
    }
  }
  if (changes?.state) {
    for (const change of changes.state) {
      if (isShallowEqual(change)) {
        warnings.add(change);
      }
    }
  }
  return warnings.size > 0 ? warnings : null;
}
function processEvents(newEvents, allEvents, {
  linkedEvents,
  commitById,
  fiberById,
  fiberTypeDefById,
  fibersByTypeId,
  fibersByProviderId,
  leakedFibers,
  parentTree,
  parentTreeIncludeUnmounted,
  ownerTree,
  ownerTreeIncludeUnmounted
}) {
  const newEventsByCommitId = /* @__PURE__ */ new Map();
  let mountCount = 0;
  let unmountCount = 0;
  let updateCount = 0;
  let fiberEventIndex = allEvents.length;
  allEvents.length += newEvents.length;
  const linkEvent = (linkedEvent) => {
    const { event } = linkedEvent;
    const trigger = "trigger" in event && event.trigger !== void 0 && linkedEvents.get(allEvents[event.trigger]) || null;
    linkedEvent.trigger = trigger;
    linkedEvents.set(event, linkedEvent);
    return linkedEvent;
  };
  const normChanges = (fiber, changes) => {
    if (changes === null) {
      return null;
    }
    const normalizedChanges = {
      ...changes,
      warnings: null,
      state: changes.state?.map((change) => ({
        ...change,
        hook: change.hook !== null ? fiber.typeDef.hooks[change.hook] : null
      })),
      context: changes.context?.map((change) => {
        const linkedEvent = linkedEvents.get(
          allEvents[change.valueChangedEventId]
        );
        const { prev, next, diff } = linkedEvent?.changes?.props?.find((prop) => prop.name === "value") || {};
        return {
          context: fiber.typeDef.contexts?.[change.context] || null,
          prev,
          next,
          diff
        };
      }) || null
    };
    normalizedChanges.warnings = eventChangesWarnings(fiber, normalizedChanges);
    return normalizedChanges;
  };
  for (const event of newEvents) {
    let fiber;
    let changes = null;
    allEvents[fiberEventIndex++] = event;
    switch (event.op) {
      case "fiber-type-def": {
        fiberTypeDefById.set(event.typeId, {
          ...event.definition,
          hooks: event.definition.hooks.map((hook, index) => ({
            index,
            ...hook,
            context: typeof hook.context === "number" ? event.definition.contexts?.[hook.context] || null : null
          }))
        });
        continue;
      }
      case "mount": {
        const typeDef = fiberTypeDefById.get(event.fiber.typeId) || {
          contexts: null,
          hooks: []
        };
        mountCount++;
        fiber = {
          ...event.fiber,
          typeDef,
          displayName: event.fiber.displayName || (!event.fiber.ownerId ? "Render root" : "Unknown"),
          mounted: true,
          leaked: 0,
          leakedHooks: null,
          events: [],
          updatesCount: 0,
          updatesBailoutCount: 0,
          updatesBailoutStateCount: 0,
          warnings: 0,
          selfTime: event.selfTime,
          totalTime: event.totalTime
        };
        fibersByTypeId.add(fiber.typeId, fiber.id);
        parentTree.add(fiber.id, fiber.parentId);
        parentTreeIncludeUnmounted.add(fiber.id, fiber.parentId);
        ownerTree.add(fiber.id, fiber.ownerId);
        ownerTreeIncludeUnmounted.add(fiber.id, fiber.ownerId);
        if (typeDef.contexts) {
          for (const { providerId } of typeDef.contexts) {
            if (typeof providerId === "number") {
              fibersByProviderId.add(providerId, fiber.id);
            }
          }
        }
        break;
      }
      case "unmount": {
        unmountCount++;
        fiber = fiberById.get(event.fiberId);
        fiber = {
          ...fiber,
          mounted: false
        };
        parentTree.delete(fiber.id);
        ownerTree.delete(fiber.id);
        break;
      }
      case "update":
        if (!fiberById.has(event.fiberId)) {
          continue;
        }
        updateCount++;
        fiber = fiberById.get(event.fiberId);
        changes = normChanges(fiber, event.changes);
        fiber = {
          ...fiber,
          updatesCount: fiber.updatesCount + 1,
          selfTime: fiber.selfTime + event.selfTime,
          totalTime: fiber.totalTime + event.totalTime,
          warnings: fiber.warnings + (changes?.warnings?.size || 0)
        };
        break;
      case "update-bailout-state":
        fiber = fiberById.get(event.fiberId);
        fiber = {
          ...fiber,
          updatesBailoutCount: fiber.updatesBailoutCount + 1,
          updatesBailoutStateCount: fiber.updatesBailoutStateCount + 1
        };
        break;
      case "update-bailout-memo":
        fiber = fiberById.get(event.fiberId);
        fiber = {
          ...fiber,
          updatesBailoutCount: fiber.updatesBailoutCount + 1
        };
        break;
      case "update-bailout-scu":
        fiber = fiberById.get(event.fiberId);
        fiber = {
          ...fiber,
          updatesBailoutCount: fiber.updatesBailoutCount + 1
        };
        changes = normChanges(fiber, event.changes);
        break;
      case "commit-start":
        commitById.set(event.commitId, {
          commitId: event.commitId,
          start: linkEvent({
            target: "commit",
            targetId: event.commitId,
            event,
            trigger: null
          }),
          finish: null,
          events: []
        });
        continue;
      case "maybe-leaks": {
        for (const added of event.added) {
          const fiberId = added.fiberId;
          if (!fiberById.has(fiberId)) {
            continue;
          }
          fiber = fiberById.get(fiberId);
          if (added.type === TrackingObjectHook) {
            if (added.hookIdx === null) {
              continue;
            }
            fiber = {
              ...fiber,
              leakedHooks: fiber.leakedHooks ? fiber.leakedHooks.concat(added.hookIdx) : [added.hookIdx],
              leaked: fiber.leaked | 1 << added.type
            };
          } else {
            fiber = {
              ...fiber,
              leaked: fiber.leaked | 1 << added.type
            };
          }
          leakedFibers.add(fiberId);
          fiberById.set(fiberId, fiber);
          parentTreeIncludeUnmounted.setFiber(fiberId, fiber);
          ownerTreeIncludeUnmounted.setFiber(fiberId, fiber);
        }
        for (const removed of event.removed) {
          const fiberId = removed.fiberId;
          if (!fiberById.has(fiberId)) {
            continue;
          }
          fiber = fiberById.get(fiberId);
          if (removed.type === TrackingObjectHook) {
            const leakedHooks = fiber.leakedHooks?.filter((idx) => idx !== removed.hookIdx) || [];
            fiber = {
              ...fiber,
              leakedHooks: leakedHooks.length ? leakedHooks : null,
              leaked: leakedHooks.length ? fiber.leaked : fiber.leaked & ~(1 << removed.type)
            };
          } else {
            fiber = {
              ...fiber,
              leaked: fiber.leaked & ~(1 << removed.type)
            };
          }
          if (!fiber.leaked) {
            leakedFibers.delete(fiberId);
          }
          fiberById.set(fiberId, fiber);
          parentTreeIncludeUnmounted.setFiber(fiberId, fiber);
          ownerTreeIncludeUnmounted.setFiber(fiberId, fiber);
        }
        continue;
      }
      default:
        continue;
    }
    fiber = {
      ...fiber,
      events: fiber.events.concat(
        linkEvent({
          target: "fiber",
          targetId: event.fiberId,
          event,
          changes,
          trigger: null,
          triggeredByOwner: false
        })
      )
    };
    fiberById.set(fiber.id, fiber);
    parentTree.setFiber(fiber.id, fiber);
    parentTreeIncludeUnmounted.setFiber(fiber.id, fiber);
    ownerTree.setFiber(fiber.id, fiber);
    ownerTreeIncludeUnmounted.setFiber(fiber.id, fiber);
    if (event.commitId >= 0) {
      const events = newEventsByCommitId.get(event.commitId);
      if (events) {
        events.push(event);
      } else {
        newEventsByCommitId.set(event.commitId, [event]);
      }
    }
  }
  for (const [commitId, events] of newEventsByCommitId) {
    const commit = commitById.get(commitId);
    if (commit) {
      commitById.set(commitId, {
        ...commit,
        events: commit.events.concat(events)
      });
    }
  }
  return {
    mountCount,
    unmountCount,
    updateCount
  };
}

// src/data/subscription.ts
var EmptySet = /* @__PURE__ */ new Set();
function subscribeById(map, id, fn) {
  let subscriptions = map.get(id);
  if (typeof subscriptions === "undefined") {
    subscriptions = /* @__PURE__ */ new Set();
    map.set(id, subscriptions);
  }
  return subscribe(subscriptions, fn);
}
function subscribe(subscriptions, fn) {
  let entry = { fn };
  subscriptions.add(entry);
  return () => {
    subscriptions.delete(entry);
    entry = void 0;
  };
}
function notifyById(map, id, ...args) {
  return notify(map.get(id) || EmptySet, ...args);
}
function notify(subscriptions, ...args) {
  for (const { fn } of subscriptions) {
    fn(...args);
  }
}
var SubscribeMap = class extends Map {
  constructor() {
    super(...arguments);
    this.subscriptionsMap = /* @__PURE__ */ new Map();
    this.awaitingNotify = /* @__PURE__ */ new Set();
    this.valuesSubscriptions = /* @__PURE__ */ new Set();
  }
  hasSubscriptions(id) {
    const subscriptions = this.subscriptionsMap.get(id);
    return subscriptions !== void 0 && subscriptions.size > 0;
  }
  subscribe(id, fn) {
    return subscribeById(this.subscriptionsMap, id, fn);
  }
  subscribeValues(fn) {
    return subscribe(this.valuesSubscriptions, fn);
  }
  notify() {
    for (const id of this.awaitingNotify) {
      notifyById(this.subscriptionsMap, id, this.get(id) || null);
    }
    if (this.valuesSubscriptions.size) {
      notify(this.valuesSubscriptions, []);
    }
  }
  set(key, value) {
    this.awaitingNotify.add(key);
    awaitNotify(this);
    return super.set(key, value);
  }
  delete(key) {
    this.awaitingNotify.delete(key);
    awaitNotify(this);
    return super.delete(key);
  }
  clear() {
    this.awaitingNotify.clear();
    awaitNotify(this);
    return super.clear();
  }
};
var Subset = class extends Set {
  constructor() {
    super(...arguments);
    this.subscriptions = /* @__PURE__ */ new Set();
    this.value = [];
  }
  subscribe(fn) {
    return subscribe(this.subscriptions, fn);
  }
  notify() {
    this.value = [...this.values()];
    if (this.subscriptions.size === 0) {
      return;
    }
    notify(this.subscriptions, this.value);
  }
  add(value) {
    awaitNotify(this);
    return super.add(value);
  }
  delete(value) {
    awaitNotify(this);
    return super.delete(value);
  }
  clear() {
    awaitNotify(this);
    return super.clear();
  }
};
var SubsetSplit = class extends Map {
  constructor() {
    super(...arguments);
    this.awaitingNotify = /* @__PURE__ */ new Set();
  }
  subscribe(id, fn) {
    return this.get(id).subscribe(fn);
  }
  notify(id) {
    return this.get(id).notify();
  }
  get(id) {
    let subset = super.get(id);
    if (subset === void 0) {
      this.set(id, subset = new Subset());
    }
    return subset;
  }
  add(key, value) {
    const subset = this.get(key);
    subset.add(value);
    return this;
  }
  remove(key, value) {
    const subset = this.get(key);
    if (subset !== void 0) {
      subset.delete(value);
    }
    return this.delete(key);
  }
};
var awaitingNotify = /* @__PURE__ */ new Set();
function awaitNotify(subject) {
  awaitingNotify.add(subject);
}
function stopAwatingNotify(subject) {
  awaitingNotify.delete(subject);
}
function flushNotify(subject) {
  if (subject) {
    if (awaitingNotify.has(subject)) {
      subject.notify();
      awaitingNotify.delete(subject);
    }
    return;
  }
  for (const subject2 of awaitingNotify) {
    subject2.notify();
  }
  awaitingNotify.clear();
}

// src/data/tree.ts
var import_lodash = __toESM(require_lodash());
function getSubtreeIds(id, childrenMap) {
  const subtree = /* @__PURE__ */ new Set([id]);
  for (const id2 of subtree) {
    const children = childrenMap.get(id2) || [];
    for (const childId of children) {
      subtree.add(childId);
    }
  }
  return subtree;
}
function subscribeSubtree(id, tree, fn) {
  const subscriptions = /* @__PURE__ */ new Map();
  const pendingAdded = /* @__PURE__ */ new Set();
  const pendingRemoved = /* @__PURE__ */ new Set();
  const notifyChanges = (0, import_lodash.default)(
    () => {
      if (pendingAdded.size === 0 && pendingRemoved.size === 0) {
        return;
      }
      const added = [...pendingAdded];
      const removed = [...pendingRemoved];
      pendingAdded.clear();
      pendingRemoved.clear();
      fn(added, removed);
    },
    1,
    { maxWait: 1 }
  );
  const remove = (id2) => {
    if (!subscriptions.has(id2)) {
      return;
    }
    const { prev, unsubscribe } = subscriptions.get(id2);
    subscriptions.delete(id2);
    unsubscribe();
    for (const id3 of prev) {
      remove(id3);
    }
    pendingRemoved.add(id2);
    pendingAdded.delete(id2);
    notifyChanges();
  };
  const add = (id2) => {
    if (subscriptions.has(id2)) {
      return;
    }
    const descriptor = {
      prev: new Set(tree.getOrCreate(id2).children),
      unsubscribe: tree.subscribeById(id2, (node) => {
        const nextSet = new Set(node.children);
        for (const id3 of nextSet) {
          if (!descriptor.prev.has(id3)) {
            add(id3);
          }
        }
        for (const id3 of descriptor.prev) {
          if (!nextSet.has(id3)) {
            remove(id3);
          }
        }
        descriptor.prev = nextSet;
      })
    };
    subscriptions.set(id2, descriptor);
    for (const childId of descriptor.prev) {
      add(childId);
    }
    pendingAdded.add(id2);
    pendingRemoved.delete(id2);
    notifyChanges();
  };
  add(id);
  notifyChanges();
  notifyChanges.flush();
  return () => {
    for (const [id2] of subscriptions) {
      remove(id2);
    }
    notifyChanges.flush();
    notifyChanges.cancel();
  };
}
function findDelta(prev, next) {
  const added = [];
  const removed = [];
  for (const id of next) {
    if (!prev.has(id)) {
      added.push(id);
    }
  }
  for (const id of prev) {
    if (!next.has(id)) {
      removed.push(id);
    }
  }
}
var Tree = class {
  constructor() {
    this.root = new TreeNode(0);
    this.nodes = /* @__PURE__ */ new Map([[0, this.root]]);
    this.subscriptions = /* @__PURE__ */ new Set();
  }
  get first() {
    return this.root;
  }
  get last() {
    return this.root.last;
  }
  getOrCreate(id) {
    let node = this.nodes.get(id);
    if (node === void 0) {
      this.nodes.set(id, node = new TreeNode(id));
      awaitNotify(this);
    }
    return node;
  }
  has(id) {
    return this.nodes.has(id);
  }
  get(id) {
    return this.nodes.get(id);
  }
  add(id, parentId) {
    const node = this.getOrCreate(id);
    const parent = this.getOrCreate(parentId);
    if (node !== parent) {
      node.parent = parent;
      awaitNotify(parent);
    }
    return this;
  }
  setFiber(id, fiber) {
    const node = this.nodes.get(id);
    if (node !== void 0 && node.fiber !== fiber) {
      node.fiber = fiber;
      awaitNotify(this);
    }
  }
  delete(id) {
    const node = this.nodes.get(id);
    if (node === void 0) {
      return;
    }
    for (const descendant of node.descendants()) {
      this.nodes.delete(descendant.id);
      stopAwatingNotify(descendant);
      descendant.reset(true);
    }
    node.next = node.nextSkipDescendant;
    if (node.next !== null) {
      node.next.prev = node;
    }
    if (node.parent) {
      awaitNotify(node.parent);
    }
    if (id !== 0) {
      this.nodes.delete(id);
      awaitNotify(this);
      stopAwatingNotify(node);
    }
    node.reset();
  }
  subscribe(fn) {
    return subscribe(this.subscriptions, fn);
  }
  notify() {
    notify(this.subscriptions);
  }
  subscribeById(id, fn) {
    const node = this.getOrCreate(id);
    return node.subscribe(fn);
  }
  walk(fn, start = null, end = null) {
    return this.root.walk(
      fn,
      start !== null ? this.nodes.get(start) : null,
      end !== null ? this.nodes.get(end) : null
    );
  }
  walkBack(fn, start = null, end = null) {
    return this.root.walkBack(
      fn,
      start !== null ? this.nodes.get(start) : null,
      end !== null ? this.nodes.get(end) : null
    );
  }
  find(accept, start = null, roundtrip) {
    return this.root.find(
      accept,
      start !== null ? this.nodes.get(start) : null,
      roundtrip
    );
  }
  findBack(accept, start = null, roundtrip) {
    return this.root.findBack(
      accept,
      start !== null ? this.nodes.get(start) : null,
      roundtrip
    );
  }
};
var _parent, _children;
var TreeNode = class {
  constructor(id) {
    this.fiber = null;
    __privateAdd(this, _parent, null);
    __privateAdd(this, _children, null);
    this.firstChild = null;
    this.lastChild = null;
    this.prevSibling = null;
    this.nextSibling = null;
    this.prev = null;
    this.next = null;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.id = id;
  }
  subscribe(fn) {
    return subscribe(this.subscriptions, fn);
  }
  notify() {
    notify(this.subscriptions, this);
  }
  get parent() {
    return __privateGet(this, _parent);
  }
  set parent(newParent) {
    if (__privateGet(this, _parent) === newParent) {
      return;
    }
    if (__privateGet(this, _parent) !== null) {
      const oldParent = __privateGet(this, _parent);
      const nextSkipDescendant = this.nextSkipDescendant;
      if (oldParent.firstChild === this) {
        oldParent.firstChild = this.nextSibling;
      }
      if (oldParent.lastChild === this) {
        oldParent.lastChild = this.prevSibling;
      }
      if (this.prevSibling !== null) {
        this.prevSibling.nextSibling = this.nextSibling;
      }
      if (this.nextSibling !== null) {
        this.nextSibling.prevSibling = this.prevSibling;
      }
      if (this.prev !== null) {
        this.prev.next = nextSkipDescendant;
      }
      if (nextSkipDescendant !== null) {
        nextSkipDescendant.prev = this.prev;
      }
      __privateSet(oldParent, _children, null);
    }
    if (newParent !== null) {
      const lastChild = newParent.lastChild;
      const prevNext = newParent.last || newParent;
      this.prevSibling = newParent.lastChild;
      newParent.lastChild = this;
      if (lastChild !== null) {
        lastChild.nextSibling = this;
      } else {
        newParent.firstChild = this;
      }
      if (prevNext.next !== null) {
        prevNext.next.prev = this;
      }
      this.next = prevNext.next;
      prevNext.next = this;
      this.prev = prevNext;
      __privateSet(newParent, _children, null);
    }
    __privateSet(this, _parent, newParent);
  }
  get last() {
    let cursor = this;
    while (cursor.lastChild !== null) {
      cursor = cursor.lastChild;
    }
    return cursor !== this ? cursor : null;
  }
  get nextSkipDescendant() {
    let cursor = this;
    while (cursor !== null) {
      if (cursor.nextSibling !== null) {
        return cursor.nextSibling;
      }
      cursor = cursor.parent;
    }
    return null;
  }
  walk(fn, start = null, end = null) {
    let cursor = start || this;
    end = end || this.last || this;
    if (cursor !== this && fn(this) === true) {
      return this;
    }
    while (cursor !== null) {
      if (fn(cursor) === true) {
        return cursor;
      }
      if (cursor === end) {
        break;
      }
      cursor = cursor.next;
    }
    return null;
  }
  walkBack(fn, start = null, end = null) {
    let cursor = start || this.last || this;
    end = end || this;
    while (cursor !== null) {
      if (fn(cursor) === true) {
        return cursor;
      }
      if (cursor === end) {
        break;
      }
      cursor = cursor.prev;
    }
    if (cursor !== this && fn(this) === true) {
      return this;
    }
    return null;
  }
  find(accept, start = null, roundtrip = true) {
    if (start !== null && roundtrip) {
      return this.walk(accept, start) || this.walk(accept, null, start);
    }
    return this.walk(accept);
  }
  findBack(accept, start = null, roundtrip = true) {
    if (start !== null && roundtrip) {
      return this.walkBack(accept, start) || this.walkBack(accept, null, start);
    }
    return this.walkBack(accept);
  }
  ancestors() {
    const ancestors = [];
    let cursor = this.parent;
    while (cursor !== null && cursor.fiber !== null) {
      ancestors.unshift(cursor);
      cursor = __privateGet(cursor, _parent);
    }
    return ancestors;
  }
  descendants() {
    const subtree = [];
    this.walk((node) => {
      if (node !== this) {
        subtree.push(node);
      }
    });
    return subtree;
  }
  contains(node) {
    return this.find((cursor) => cursor === node);
  }
  get children() {
    if (__privateGet(this, _children) !== null) {
      return __privateGet(this, _children);
    }
    let cursor = this.firstChild;
    __privateSet(this, _children, []);
    while (cursor !== null) {
      __privateGet(this, _children).push(cursor.id);
      cursor = cursor.nextSibling;
    }
    return __privateGet(this, _children);
  }
  reset(hard = false) {
    if (hard) {
      __privateSet(this, _parent, null);
    } else {
      this.parent = null;
    }
    __privateSet(this, _children, null);
    this.firstChild = null;
    this.lastChild = null;
    this.prevSibling = null;
    this.nextSibling = null;
    this.prev = null;
    this.next = null;
  }
};
_parent = new WeakMap();
_children = new WeakMap();

// src/data/fiber-dataset.ts
function createFiberDataset(events = []) {
  const allEvents = [];
  const linkedEvents = /* @__PURE__ */ new WeakMap();
  const commitById = new SubscribeMap();
  const fiberById = new SubscribeMap();
  const fiberTypeDefById = new SubscribeMap();
  const fibersByTypeId = new SubsetSplit();
  const fibersByProviderId = new SubsetSplit();
  const leakedFibers = new Subset();
  const parentTree = new Tree();
  const parentTreeIncludeUnmounted = new Tree();
  const ownerTree = new Tree();
  const ownerTreeIncludeUnmounted = new Tree();
  const dataset = {
    allEvents,
    linkedEvents,
    commitById,
    fiberById,
    fiberTypeDefById,
    fibersByTypeId,
    fibersByProviderId,
    leakedFibers,
    parentTree,
    parentTreeIncludeUnmounted,
    ownerTree,
    ownerTreeIncludeUnmounted,
    appendEvents(events2) {
      processEvents(events2, allEvents, dataset);
    },
    selectTree(groupByParent, includeUnmounted) {
      return groupByParent ? includeUnmounted ? parentTreeIncludeUnmounted : parentTree : includeUnmounted ? ownerTreeIncludeUnmounted : ownerTree;
    }
  };
  if (Array.isArray(events) && events.length > 0) {
    dataset.appendEvents(events);
  }
  return dataset;
}
export {
  SubscribeMap,
  Subset,
  SubsetSplit,
  Tree,
  TreeNode,
  awaitNotify,
  createFiberDataset,
  findDelta,
  flushNotify,
  getSubtreeIds,
  notify,
  notifyById,
  processEvents,
  stopAwatingNotify,
  subscribe,
  subscribeById,
  subscribeSubtree
};
